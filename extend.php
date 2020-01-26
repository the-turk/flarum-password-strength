<?php

/**
 * Password Strength Checker Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-password-strength
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.1.0
 * @link       https://github.com/the-turk/password-strength
 */

namespace TheTurk\PasswordStrength;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\PasswordStrength;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/resources/less/admin/settingsModal.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->subscribe(PasswordStrength\Listeners\LoadSettings::class);
    },
];
