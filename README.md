# Password Strength Indicator for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-password-strength/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength)

Low-budget password strength estimation for your [Flarum](https://github.com/flarum) forum.

![Screenshot](https://i.ibb.co/BPfQV2S/SHyjmd-Rvd-I.gif)

[Click to view settings screenshot](https://i.ibb.co/GtD4Xgt/pw-Strength-Settings.png)

## Features

- Based on [zxcvbn](https://github.com/dropbox/zxcvbn) (by [DropBox](https://github.com/dropbox)).
- Password strength is labeled as 'Very weak', 'Weak', 'Average', 'Strong' and 'Very strong'.
- Customizable display modes.
- Fully self-hosted.

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151) or install manually:

```bash
composer require the-turk/flarum-password-strength
```

## Updating

```bash
composer update the-turk/flarum-password-strength
php flarum cache:clear
```

## Usage

Just enable the extension and customize if you wish.

## ToDo

- It's only working on "Sign Up" modal for now. I have no idea about how to implement it inside the reset password blade but you're very welcome to guide me or open a pull request on [GitHub](https://github.com/the-turk/flarum-password-strength).

## Links

- [Flarum Discuss post](https://discuss.flarum.org/)
- [Source code on GitHub](https://github.com/the-turk/flarum-password-strength)
- [Changelog](https://github.com/the-turk/flarum-password-strength/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-password-strength/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-password-strength)

_English is not my mother tongue, i'll appreciate it if you correct my translations._
