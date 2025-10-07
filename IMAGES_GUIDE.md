# 📸 Image Replacement Guide

## How to Replace Placeholder Images with Real Images

This guide explains how to add your historical images to the website.

---

## 📁 Step 1: Organize Your Images

1. Create a folder structure in the `public` directory:

```
public/
├── images/
│   └── history/
│       ├── dr-umoren-portrait.jpg
│       ├── college-foundation-1982.jpg
│       ├── first-graduation.jpg
│       ├── international-accreditation.jpg
│       └── modern-campus.jpg
```

2. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 1200x800px (3:2 ratio)
   - Max file size: 2MB per image
   - Good quality, well-lit photographs

---

## 🔧 Step 2: Update Image Paths

The image paths are already set in `src/lib/history-data.ts`:

```typescript
{
  id: '1',
  title: 'Dr. E. U. Umoren Portrait',
  fileUrl: '/images/history/dr-umoren-portrait.jpg',
  // ... other fields
}
```

**Simply replace your images with the same filenames**, or update the paths in the file.

---

## 🖼️ Where Images Will Appear

Your images will automatically show up in **3 locations**:

### 1. **Landing Page Carousel** 
   - Location: Above "OUR RESEARCH" section
   - Display: Auto-rotating carousel
   - Size: Full width, responsive

### 2. **News & Media Page**
   - Location: "Historical Gallery" section
   - Display: 3-column grid
   - Size: 384px wide cards

### 3. **History Page**
   - Location: "Historical Gallery" section (bottom)
   - Display: 3-column grid
   - Size: Medium-sized cards

---

## 📝 Adding More Images

To add additional images:

1. **Add the image to the public folder:**
   ```
   public/images/history/new-image.jpg
   ```

2. **Update `src/lib/history-data.ts`:**
   ```typescript
   {
     id: '6',
     title: 'New Historical Moment',
     documentType: 'photo',
     description: 'Description of the new image',
     year: 2024,
     isFeatured: true, // Set to true to show in carousel/galleries
     fileUrl: '/images/history/new-image.jpg'
   }
   ```

3. **Save the file** - changes will reflect immediately!

---

## 🎨 Image Optimization Tips

For best performance:

1. **Compress images** before uploading:
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

2. **Use appropriate formats:**
   - Photos: JPG or WebP
   - Documents/Certificates: PNG
   - Icons: SVG (if needed)

3. **Consistent aspect ratios:**
   - Portrait photos: 3:4 ratio
   - Landscape photos: 3:2 or 16:9 ratio
   - Documents: Keep original ratio

---

## 🔄 Using External URLs (Alternative)

If you want to host images externally (e.g., cloud storage):

1. **Upload images to your hosting service** (Cloudinary, AWS S3, etc.)

2. **Get the public URL**

3. **Update the `fileUrl` in `history-data.ts`:**
   ```typescript
   fileUrl: 'https://your-cdn.com/images/dr-umoren.jpg'
   ```

4. **Add domain to Next.js config** (`next.config.js`):
   ```javascript
   module.exports = {
     images: {
       domains: [
         'images.unsplash.com', 
         'via.placeholder.com',
         'your-cdn.com' // Add your domain here
       ],
     },
   }
   ```

---

## ✅ Current Placeholders

These are the 5 featured images that need to be replaced:

| ID | Title | Filename | Year |
|----|-------|----------|------|
| 1 | Dr. E. U. Umoren Portrait | `dr-umoren-portrait.jpg` | 1901 |
| 2 | College Foundation Certificate | `college-foundation-1982.jpg` | 1982 |
| 3 | First Graduation Ceremony | `first-graduation.jpg` | 1982 |
| 4 | International Accreditation | `international-accreditation.jpg` | 2007 |
| 5 | Modern Campus View | `modern-campus.jpg` | 2024 |

---

## 🚨 Troubleshooting

**Images not showing?**
- ✅ Check file paths are correct
- ✅ Ensure images are in the `public` folder
- ✅ Restart the dev server (`npm run dev`)
- ✅ Clear browser cache

**Images look stretched?**
- ✅ Check aspect ratio (3:2 recommended)
- ✅ Use higher resolution source images

**Images load slowly?**
- ✅ Compress images before uploading
- ✅ Use WebP format for better compression

---

## 🎯 Quick Start

**The fastest way to add images:**

1. Rename your 5 images to match the filenames above
2. Drop them in `public/images/history/`
3. Refresh your browser!

That's it! The website will automatically display your images instead of placeholders.

---

Need help? Check the Next.js Image documentation: https://nextjs.org/docs/basic-features/image-optimization

