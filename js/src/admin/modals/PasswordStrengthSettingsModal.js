import app from "flarum/app";
import SettingsModal from "flarum/components/SettingsModal";
import Switch from "flarum/components/Switch";

const settingsPrefix = "the-turk-password-strength.";
const localePrefix = "the-turk-password-strength.admin.settings.";

export default class PasswordStrengthSettingsModal extends SettingsModal {
  title() {
    return app.translator.trans(localePrefix + "title");
  }

  /**
   * Build modal form.
   */
  form() {
    return [
      m(".Form-group", [
        m(
          "label.psHeading",
          app.translator.trans(localePrefix + "colorOptions")
        ),
        m(".helpText .psHelpText", [
          m("i.fas fa-exclamation-circle"),
          m("span", app.translator.trans(localePrefix + "colorHelp")),
        ]),
      ]),
      m(".Form-group .psSettingsFlex", [
        m("p", app.translator.trans(localePrefix + "weakColor")),
        m("input[type=text].FormControl", {
          bidi: this.setting(settingsPrefix + "weakColor", "255,129,128"),
        }),
      ]),
      m(".Form-group .psSettingsFlex", [
        m("p", app.translator.trans(localePrefix + "mediumColor")),
        m("input[type=text].FormControl", {
          bidi: this.setting(settingsPrefix + "mediumColor", "249,197,117"),
        }),
      ]),
      m(".Form-group .psSettingsFlex", [
        m("p", app.translator.trans(localePrefix + "strongColor")),
        m("input[type=text].FormControl", {
          bidi: this.setting(settingsPrefix + "strongColor", "111,199,164"),
        }),
      ]),
      m(".Form-group", [
        m(
          "label.psHeading",
          app.translator.trans(localePrefix + "otherOptions")
        ),
      ]),
      m(".Form-group", [
        m(
          "label",
          Switch.component({
            state:
              this.setting(settingsPrefix + "enableInputColor", "0")() === "1",
            children: app.translator.trans(localePrefix + "enableInputColor"),
            onchange: (value) => {
              this.setting(settingsPrefix + "enableInputColor")(
                value ? "1" : "0"
              );
            },
          })
        ),
      ]),
      m(".Form-group", [
        m(
          "label",
          Switch.component({
            state:
              this.setting(settingsPrefix + "enableInputBorderColor", "1")() ===
              "1",
            children: app.translator.trans(
              localePrefix + "enableInputBorderColor"
            ),
            onchange: (value) => {
              this.setting(settingsPrefix + "enableInputBorderColor")(
                value ? "1" : "0"
              );
            },
          })
        ),
      ]),
      m(".Form-group", [
        m(
          "label",
          Switch.component({
            state:
              this.setting(settingsPrefix + "enablePasswordToggle", "1")() ===
              "1",
            children: app.translator.trans(
              localePrefix + "enablePasswordToggle"
            ),
            onchange: (value) => {
              this.setting(settingsPrefix + "enablePasswordToggle")(
                value ? "1" : "0"
              );
            },
          })
        ),
      ]),
    ];
  }
}
