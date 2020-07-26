# Şifre Zorluk Derecesi Belirteci

[![MIT lisansı](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-password-strength/blob/master/LICENSE) [![Son Stabil Sürüm](https://img.shields.io/packagist/v/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength) [![Toplam İndirme](https://img.shields.io/packagist/dt/the-turk/flarum-password-strength.svg)](https://packagist.org/packages/the-turk/flarum-password-strength)

Forumunuz için düşük bütçeli şifre zorluk derecesi belirteci.

![Ekran görüntüsü](https://i.imgur.com/j4QErvP.gif)

[Ayarların ekran görüntüsü için buraya tıklayın](https://i.ibb.co/r5ftZRb/ps-Settings.png)

## Özellikler

- [DropBox](https://github.com/dropbox) tarafından kullanılan [zxcvbn](https://github.com/dropbox/zxcvbn) tabanlıdır.
- Şifre zorluk dereceleri "Zayıf", "Daha iyi olabilir" ve "Güçlü" olarak etiketlendirilmiştir.
- Görüntüleme modu değiştirilebilir.

## Kurulum

```bash
composer require the-turk/flarum-password-strength
```

## Güncelleme

```bash
composer update the-turk/flarum-password-strength
php flarum cache:clear
```

## Kullanım

Eklentiyi aktif edin ve istediğiniz biçimde özelleştirin.

## Yapılacaklar

- Şifre sıfırlama şablonuna nasıl uyarlayacağım hakkında henüz bir bilgim yok ama bu konuda beni yönlendirebilir ya da [GitHub](https://github.com/the-turk/flarum-password-strength) üzerinden çözüm önerilerinde bulunabilirsiniz.

## Bağlantılar

- [Flarum tartışma konusu](https://discuss.flarum.org/d/22624-password-strength-indicator)
- [GitHub üzerindeki kaynak kodu](https://github.com/the-turk/flarum-password-strength)
- [Değişiklikler](https://github.com/the-turk/flarum-password-strength/blob/master/CHANGELOG.md)
- [Sorun bildir](https://github.com/the-turk/flarum-password-strength/issues)
- [Packagist aracılığıyla indir](https://packagist.org/packages/the-turk/flarum-password-strength)
