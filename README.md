# Password Strength Indicator for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-password-strength/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength)

Low-budget password strength estimation for your forum.

![Indicator](https://i.imgur.com/j4QErvP.gif)

[Click to view settings screenshot](https://i.ibb.co/r5ftZRb/ps-Settings.png)

## Features

- Based on [zxcvbn](https://github.com/dropbox/zxcvbn) (by [DropBox](https://github.com/dropbox)).
- Password strength is labeled as 'Weak', 'Could be stronger' and 'Strong'.
- Customizable display modes.

## Installation

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

- I have no idea about how to implement it inside the reset password blade but you're very welcome to guide me or open a pull request on [GitHub](https://github.com/the-turk/flarum-password-strength).

## Links

- [Flarum Discuss post](https://discuss.flarum.org/d/22624-password-strength-indicator)
- [Source code on GitHub](https://github.com/the-turk/flarum-password-strength)
- [Changelog](https://github.com/the-turk/flarum-password-strength/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-password-strength/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-password-strength)
