import { extend } from 'flarum/extend';
import zxcvbn from '../../dist/zxcvbn.js';
import extractText from 'flarum/utils/extractText';
import app from 'flarum/app';
import SignUpModal from 'flarum/components/SignUpModal';

const localePrefix = 'the-turk-password-strength.forum.strengthLabels.';
const settingsPrefix = 'passwordStrength';
const spanClassName = 'PasswordStrength';

let weakColor, strongColor, strengthColor, inputStyle, spanSelector;

const strengthChecker = function(value) {
  var checkPassword = zxcvbn(value);
  var result = {};

  result.score = checkPassword.score;

  switch (result.score) {
    case 0:
      result.info = app.translator.trans(localePrefix + 'veryWeak');
      break;
    case 1:
      result.info = app.translator.trans(localePrefix + 'weak');
      break;
    case 2:
      result.info = app.translator.trans(localePrefix + 'average');
      break;
    case 3:
      result.info = app.translator.trans(localePrefix + 'strong');
      break;
    case 4:
      result.info = app.translator.trans(localePrefix + 'veryStrong');
      break;
  }

  return result;
}

// Interpolate value between two colors.
// Value is number from 0-1. 0 Means color A, 0.5 middle etc.
// Adapted from
// /kimmobrunfeldt/progressbar.js/blob/gh-pages/examples/password-strength/main.js
const interpolateColor = function(rgbA, rgbB, value) {
  var rDiff = rgbA[0] - rgbB[0];
  var gDiff = rgbA[1] - rgbB[1];
  var bDiff = rgbA[2] - rgbB[2];
  value = 1 - value;
  return [
    rgbB[0] + rDiff * value,
    rgbB[1] + gDiff * value,
    rgbB[2] + bDiff * value
  ];
}

const rgbArrayToString =
  (rgb) => 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

app.initializers.add('the-turk-password-strength', () => {
  extend(SignUpModal.prototype, 'fields', function(items) {
    if (!this.props.token) {
      if (app.forum.attribute(settingsPrefix + 'EnableLabel') === true) {
        items.add('the-turk-password-strength', m('.Form-group', [
          m('span', {
            className: spanClassName,
            style: 'display:none;'
          }),
        ]), 5);
      }

      items.replace('password', m('.Form-group', [
        m('input[type=password].FormControl', {
          name: 'password',
          placeholder: extractText(app.translator.trans('core.forum.sign_up.password_placeholder')),
          value: this.password(),
          style: inputStyle,
          oninput: e => {
            if (e.target.value && e.target.value.length > 0) {
              const weakColor = app.forum.attribute(settingsPrefix + 'WeakColor');
              const strongColor = app.forum.attribute(settingsPrefix + 'StrongColor');
              const foreColor = app.forum.attribute(settingsPrefix + 'ForeColor');
              const displayMode = app.forum.attribute(settingsPrefix + 'DisplayMode');

              var progress = strengthChecker(e.target.value).score / 4;

              if (progress === 0) {
                progress = 0.1;
              }

              strengthColor = rgbArrayToString(
                interpolateColor(weakColor, strongColor, progress)
              );

              if (displayMode == 'inputColor' || displayMode == 'inputBgColor') {
                inputStyle =
                  (displayMode == 'inputBgColor' ?
                    (foreColor != '' ? 'color:' +
                      rgbArrayToString(foreColor) + ';' : '') +
                    'background-' : '') + 'color:' + strengthColor + ';';
              }

              if (app.forum.attribute(settingsPrefix + 'EnableLabel') === true) {
                spanSelector = this.$('span.' + spanClassName)[0];

                spanSelector.innerText = strengthChecker(e.target.value).info;
                spanSelector.style.display = 'block';
                spanSelector.style.color = strengthColor;
              }
            } else {
              inputStyle = '';
              if (app.forum.attribute(settingsPrefix + 'EnableLabel') === true) {
                spanSelector.style.display = 'none';
              }
            }

            this.password(e.target.value);
          },
          disabled: this.loading
        }),
      ]), 10);
    }
  });
});
