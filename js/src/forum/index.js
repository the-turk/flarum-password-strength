import app from "flarum/app";
import { extend } from "flarum/extend";
import extractText from "flarum/utils/extractText";
import LogInModal from "flarum/components/LogInModal";
import SignUpModal from "flarum/components/SignUpModal";

const localePrefix = "the-turk-password-strength.forum.";

app.initializers.add("the-turk-password-strength", () => {
  let hasLoaded = false;
  let isLoading = false;
  let strengthLabel;

  const load = () => {
    isLoading = true;

    $.getScript(
      "//cdn.jsdelivr.net/npm/zxcvbn@4.4.2/dist/zxcvbn.min.js",
      () => {
        isLoading = false;
        hasLoaded = true;
      }
    );
  };

  const toggler = m("i.fa .fa-eye .password-toggle", {
    config: (e) => {
      const $passwordInput = $(".Password-group > input");
      const attr = $passwordInput.attr("type");

      if ($(e).hasClass("fa-eye-slash") && attr != "text") {
        $passwordInput.attr("type", "text");
      } else if ($(e).hasClass("fa-eye") && attr != "password") {
        $passwordInput.attr("type", "password");
      }
    },
    onclick: (e) => {
      $(e.target).toggleClass("fa-eye").toggleClass("fa-eye-slash");
      $(".Password-group > input").focus();
    },
  });

  function strengthChecker(value) {
    let result = {};

    result.score = zxcvbn(value).score;

    switch (result.score) {
      case 0:
      case 1:
        result.info = app.translator.trans(
          localePrefix + "strengthLabels.weak"
        );
        break;
      case 2:
      case 3:
        result.info = app.translator.trans(
          localePrefix + "strengthLabels.medium"
        );
        break;
      case 4:
        result.info = app.translator.trans(
          localePrefix + "strengthLabels.strong"
        );
        break;
    }

    return result;
  }

  function colorizeInput(element, color) {
    if (app.forum.attribute("psEnableInputBorderColor")) {
      element.style.borderColor = color;
    }

    if (app.forum.attribute("psEnableInputColor")) {
      element.style.color = color;
    }
  }

  extend(LogInModal.prototype, "fields", function (items) {
    if (app.forum.attribute("psEnablePasswordToggle")) {
      items.replace(
        "password",
        m(".Form-group .Password-group", [
          m("input[type=password].FormControl .togglable", {
            name: "password",
            placeholder: extractText(
              app.translator.trans(localePrefix + "logInModal.placeholder")
            ),
            value: this.password(),
            bidi: this.password,
            disabled: this.loading,
          }),
          toggler,
        ]),
        20
      );
    }
  });

  extend(SignUpModal.prototype, "config", function (original, isInitialized) {
    if (isInitialized && !hasLoaded && !isLoading) load();
  });

  extend(SignUpModal.prototype, "fields", function (items) {
    if (!this.props.token) {
      const $strengthIndicator = $("div.strengthIndicator");
      const enablePasswordToggle = app.forum.attribute(
        "psEnablePasswordToggle"
      );
      const placeholder = enablePasswordToggle
        ? localePrefix + "signUpModal.placeholder"
        : "core.forum.sign_up.password_placeholder";
      // Colors
      const weakColor = app.forum.attribute("psWeakColor");
      const mediumColor = app.forum.attribute("psMediumColor");
      const strongColor = app.forum.attribute("psStrongColor");

      items.replace(
        "password",
        m(".Form-group .Password-group", [
          m(
            "input[type=password].FormControl" +
              (enablePasswordToggle ? " .togglable" : ""),
            {
              name: "password",
              placeholder: extractText(app.translator.trans(placeholder)),
              value: this.password(),
              disabled: this.loading,
              oninput: (e) => {
                if (hasLoaded) {
                  const result = strengthChecker(e.target.value);
                  const score = result.score;
                  strengthLabel = result.info;

                  if (e.target.value && e.target.value.length > 0) {
                    switch (score) {
                      case 0:
                      case 1:
                        $(".pill--strong, .pill--average").addClass(
                          "pill--gray"
                        );
                        colorizeInput(e.target, weakColor);
                        break;
                      case 2:
                      case 3:
                        $(".pill--strong").addClass("pill--gray");
                        $(".pill--average").removeClass("pill--gray");
                        colorizeInput(e.target, mediumColor);
                        break;
                      case 4:
                        $(".pill--strong, .pill--average").removeClass(
                          "pill--gray"
                        );
                        colorizeInput(e.target, strongColor);
                        break;
                    }

                    if ($strengthIndicator.is(":hidden"))
                      $strengthIndicator.show("fast");
                  } else {
                    // https://stackoverflow.com/a/4036868/12866913
                    colorizeInput(e.target, "");

                    if ($strengthIndicator.is(":visible"))
                      $strengthIndicator.hide("fast");
                  }
                }

                this.password(e.target.value);
              },
            }
          ),
          enablePasswordToggle ? toggler : "",
          m(
            "div.strengthIndicator",
            m("div.strengthIndicator--flex", [
              m("div.strengthIndicator--pills", [
                m("div.pill--weak", { style: "background-color:" + weakColor }),
                m("div.pill--average pill--gray", {
                  style: "background-color:" + mediumColor,
                }),
                m("div.pill--strong pill--gray", {
                  style: "background-color:" + strongColor,
                }),
              ]),
              m("div.strengthIndicator--label", <span>{strengthLabel}</span>),
            ])
          ),
        ]),
        10
      );
    }
  });
});
