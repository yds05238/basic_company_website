import CMS from 'netlify-cms'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
// import ArticlePreview from './preview-templates/ArticlePreview'
// import PricingPagePreview from './preview-templates/PricingPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'


import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
// CMS.registerPreviewTemplate('blog', ArticlePreview)
