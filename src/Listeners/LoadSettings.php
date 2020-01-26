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
     * @var string $settingsPrefix
     */
    public $settingsPrefix = 'the-turk-password-strength.';

    /**
     * LoadSettingsFromDatabase constructor
     *
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
            // Set RGB values as an array
            $weakColor = $this->commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'weakColor',
                    // default value
                    '252, 91, 63'
                )
            );
            $strongColor = $this->commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'strongColor',
                    // default value
                    '111, 213, 127'
                )
            );
            $foreColor = $this->commaToArray(
                $this->settings->get(
                    // settings key
                    $this->settingsPrefix.'foreColor',
                    // default value
                    ''
                )
            );

            $event->attributes += [
                'passwordStrengthWeakColor' => (array)$weakColor,
                'passwordStrengthStrongColor' => (array)$strongColor,
                'passwordStrengthForeColor' => (array)$foreColor,
                'passwordStrengthEnableLabel' => (bool)$this->settings->get($this->settingsPrefix.'enableLabel', true),
                'passwordStrengthDisplayMode' => (string)$this->settings->get($this->settingsPrefix.'displayMode', 'inputColor'),
            ];
        }
    }

    /**
     * Returns comma seperated list as an array.
     *
     * @param string $list
     * @return array
     */
    public function commaToArray(string $list): array
    {
        $r = [];

        if (!empty($list)) {
            $r = array_map('intval', array_filter(preg_split('/[\s,]+/', trim($list)), 'strlen'));
        }

        return $r;
    }
}
