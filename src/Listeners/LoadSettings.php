<?php
namespace TheTurk\PasswordStrength\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettings
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * Get the setting values from the database and make them available
     * in the forum.
     *
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $settingsPrefix = 'the-turk-password-strength.';

            $event->attributes += [
                'psWeakColor' => 'rgb(' .
                    $this->settings->get(
                        $settingsPrefix.'weakColor',
                        '255,129,128'
                    ) . ')',
                'psMediumColor' => 'rgb(' .
                    $this->settings->get(
                        $settingsPrefix.'mediumColor',
                        '249,197,117'
                    ) . ')',
                'psStrongColor' => 'rgb(' .
                    $this->settings->get(
                        $settingsPrefix.'strongColor',
                        '111,199,164'
                    ) . ')',
                'psEnableInputColor' => (bool)
                    $this->settings->get(
                        $settingsPrefix.'enableInputColor',
                        false
                    ),
                'psEnableInputBorderColor' => (bool)
                    $this->settings->get(
                        $settingsPrefix.'enableInputBorderColor',
                        true
                    ),
                'psEnablePasswordToggle' => (bool)
                    $this->settings->get(
                        $settingsPrefix.'enablePasswordToggle',
                        true
                    ),
            ];
        }
    }
}
