# ŞipŞak Yıkama - Mobil Öncelikli Web Sitesi

Profesyonel halı yıkama firması için tasarlanmış, mobil öncelikli (mobile-first), modern ve responsive web sitesi. Şirket havası veren, profesyonel ve temiz bir tasarım.

## Özellikler

- ✅ Mobil öncelikli tasarım (Mobile-First)
- ✅ Tam responsive (Tablet ve Desktop uyumlu)
- ✅ Profesyonel ve şirket havası veren tasarım
- ✅ Temiz ve modern arayüz
- ✅ Hamburger menü (mobilde)
- ✅ WhatsApp entegrasyonu ve WhatsApp tarzı kartlar
- ✅ jQuery ile temizlik efektleri ve animasyonlar
- ✅ SEO uyumlu yapı
- ✅ Hızlı yükleme
- ✅ Erişilebilir (Accessible)
- ✅ Profesyonel tipografi (Poppins font)

## Sayfalar

1. **Ana Sayfa (index.html)** - Simetrik hero bölümü, hizmetler özeti, neden biz, süreç, güven alanı
2. **Hizmetler (services.html)** - Detaylı hizmet açıklamaları
3. **Blog (blog.html)** - Blog yazıları listesi
4. **Blog Detay (blog-detail.html)** - Blog yazısı detay sayfası
5. **Hakkımızda (about.html)** - Firma hikayesi, misyon, vizyon, WhatsApp tarzı iletişim kartları
6. **İletişim (contact.html)** - İletişim formu ve bilgileri

## Kullanım

1. Tüm dosyaları bir klasöre kopyalayın
2. `index.html` dosyasını tarayıcıda açın
3. Telefon numarası ve WhatsApp numarasını kendi bilgilerinizle değiştirin

## Özelleştirme

### Telefon ve WhatsApp Numarası Değiştirme

Tüm HTML dosyalarında şu değerleri kendi bilgilerinizle değiştirin:
- `+905342374533` → Kendi telefon numaranız
- `0534 237 4533` → Görünen telefon numaranız (☎️ 0534 237 4533 formatında)
- `info@sipsakyikama.com` → E-posta adresiniz

### Renkleri Değiştirme

`styles.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --color-primary: #2563eb;        /* Ana renk */
    --color-primary-dark: #1e40af;   /* Koyu mavi */
    --color-secondary: #10b981;      /* Yeşil ton */
    /* ... */
}
```

### Google Maps Entegrasyonu

`contact.html` dosyasındaki harita bölümünü Google Maps ile değiştirebilirsiniz:

```html
<div class="map-container">
    <iframe src="GOOGLE_MAPS_EMBED_URL" width="100%" height="100%" style="border:0;"></iframe>
</div>
```

## Teknik Detaylar

- **HTML5** - Semantik yapı
- **CSS3** - Modern CSS (Grid, Flexbox, CSS Variables, Animations)
- **JavaScript (Vanilla + jQuery)** - Menü, form işlemleri, temizlik efektleri
- **jQuery 3.7.1** - Animasyonlar ve interaktif efektler
- **Font**: Poppins (Başlıklar) + Inter (İçerik) (Google Fonts)
- **Responsive Breakpoints**: 768px (Tablet), 1024px (Desktop)
- **Animasyonlar**: Fade-in, bounce, pulse, ripple efektleri

## Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

## Lisans

Bu proje özel kullanım için hazırlanmıştır.

## Notlar

- WhatsApp numarasını mutlaka kendi numaranızla değiştirin
- Telefon numaralarını kendi bilgilerinizle güncelleyin
- E-posta adresini kendi adresinizle değiştirin
- Sosyal medya linklerini kendi hesaplarınızla güncelleyin
- Google Maps entegrasyonu için kendi harita embed kodunuzu ekleyin

