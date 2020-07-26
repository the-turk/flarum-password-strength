import app from "flarum/app";
import PasswordStrengthSettingsModal from "./modals/PasswordStrengthSettingsModal";

// initialize settings modal
app.initializers.add("the-turk-password-strength", (app) => {
  app.extensionSettings["the-turk-password-strength"] = () =>
    app.modal.show(new PasswordStrengthSettingsModal());
});
