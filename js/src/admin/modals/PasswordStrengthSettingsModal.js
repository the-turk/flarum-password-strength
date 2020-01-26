import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';
import Select from 'flarum/components/Select';

// just to make things easier
const settingsPrefix = 'the-turk-password-strength.';
const translationPrefix = 'the-turk-password-strength.admin.settings.';

export default class PasswordStrengthSettingsModal extends SettingsModal {
  title() {
    return app.translator.trans(translationPrefix + 'title');
  }

  /**
   * Build modal form.
   *
   * @returns {*}
   */
  form() {
    return [
      m('.Form-group', [
        m('label', Switch.component({
          state: this.setting(settingsPrefix + 'enableLabel', '1')() === '1',
          children: app.translator.trans(translationPrefix + 'enableLabel'),
          onchange: value => {
            this.setting(settingsPrefix + 'enableLabel')(value ? '1' : '0');
          }
        }))
      ]),
      m('.Form-group', [
        m('label', app.translator.trans(translationPrefix + 'displayMode')),
        m('div', Select.component({
          options: {
            inputColor: app.translator.trans(translationPrefix + 'enableInputColor'),
            inputBgColor: app.translator.trans(translationPrefix + 'enableInputBackground'),
            noInputColor: app.translator.trans(translationPrefix + 'noInputColor'),
          },
          onchange: this.setting(settingsPrefix + 'displayMode'),
          value: this.setting(settingsPrefix + 'displayMode')() ||
            this.setting(settingsPrefix + 'displayMode')('inputColor')
        })),
      ]),
      m('.Form-group', [
        m('label', app.translator.trans(translationPrefix + 'colorOptions')),
        m('.helpText', app.translator.trans(translationPrefix + 'colorHelp')),
      ]),
      m('.Form-group', [
        m('div', {
            className: 'passwordStrengthInlineDivLabel'
          },
          m('.helpText', app.translator.trans(translationPrefix + 'weakColor'))
        ),
        m('div', {
            className: 'passwordStrengthInlineDivInput'
          },
          m('input[type=text].FormControl', {
            bidi: this.setting(settingsPrefix + 'weakColor', '252, 91, 63')
          }),
        ),
      ]),
      m('.Form-group', [
        m('div', {
            className: 'passwordStrengthInlineDivLabel'
          },
          m('.helpText', app.translator.trans(translationPrefix + 'strongColor'))
        ),
        m('div', {
            className: 'passwordStrengthInlineDivInput'
          },
          m('input[type=text].FormControl', {
            bidi: this.setting(settingsPrefix + 'strongColor', '111, 213, 127')
          }),
        ),
      ]),
      m('.Form-group', [
        m('div', {
            className: 'passwordStrengthInlineDivLabel'
          },
          m('.helpText', app.translator.trans(translationPrefix + 'foreColor'))
        ),
        m('div', {
            className: 'passwordStrengthInlineDivInput'
          },
          m('input[type=text].FormControl', {
            bidi: this.setting(settingsPrefix + 'foreColor', ''),
            placeholder: '0, 0, 0',
            disabled: this.setting(settingsPrefix + 'displayMode', 'inputColor')() != 'inputBgColor'
          }),
        ),
      ]),
    ];
  }
}
