const phonesHeaderTitle = document.querySelector('.phones-header__title') ; 
const phonesHeaderArrow = document.querySelector('.phones-header__arrow') ; 
const phonesHeaderList = document.querySelector('.phones-header__list') ; 

document.addEventListener('click' , function (e) {
  if (e.target === phonesHeaderTitle || e.target === phonesHeaderArrow ) {   
    phonesHeaderList.classList.toggle('_active') ; 
  }
}) 

const elementMenuList = document.querySelector('.menu__list') ; 
const elementMenuBody = document.querySelector('.menu__body') ; 
const elementHeaderBody = document.querySelector('.top-header__body')
const elementMenuContainer = document.querySelector('.top-header__container') ; 
const actionsHeaderPhone = document.querySelector('.actions-header__phones')
const actionsHeaderFavorite = document.querySelector('.actions-header__favorite') ;
const actionsHeaderCart = document.querySelector('.actions-header__cart') ; 
const bodyHeaderActions = document.querySelector('.body-header__actions') ; 
const actionsFavoriteImg = document.querySelector('.actions-header__favorite img')
const cartHeaderIconImage = document.querySelector('.cart-header__icon img') ;
const bodyHeaderSubmit = document.querySelector('.body-header__submit') ; 
const catalogHeaderContainer = document.querySelector('.catalog-header__container') ; 
const menuBody = document.querySelector('.menu__body') ; 
const searchHeader = document.querySelector('.search-header' ) ; 
window.addEventListener('resize' , functionResizeDynamic)
  function functionResizeDynamic() {
    let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth ) ; 
    if (Width <= 992) {
      elementMenuBody.append(elementMenuList) ;   
      elementMenuContainer.prepend(actionsHeaderFavorite) ; 
      elementMenuContainer.prepend(actionsHeaderCart) ; 
      elementMenuContainer.prepend(actionsHeaderPhone) ;  
      catalogHeaderContainer.append(searchHeader) ; 
      
    } else {
      elementHeaderBody.append(elementMenuList) ; 
      bodyHeaderSubmit.append(searchHeader) ; 
      bodyHeaderActions.append(actionsHeaderPhone) ; 
      bodyHeaderActions.append(actionsHeaderFavorite) ; 
      bodyHeaderActions.append(actionsHeaderCart) ; 

    }
}
functionResizeDynamic() ;
document.querySelector('.menu-top-header-item_catalog').addEventListener('click' , function(e) {   
  e.preventDefault() ; 
  document.documentElement.classList.add('_open-active') ; 
})
document.addEventListener('click' , function (e) {
  const targetElement = e.target ; 
   if (targetElement.closest('[data-parent]')) {
     e.preventDefault() ; 

    const submenuInd = targetElement.dataset.parent ? targetElement.dataset.parent : null  ;
    const submenu = document.querySelector(`[data-submenu="${submenuInd}"]`); 

    const catalogMenu = document.querySelector('.catalog-header') ;
    const menuCatalogSubMenu = document.querySelector('.menu-catalog__sub-menu') ; 

    if (submenu) {

      const activeLink = document.querySelector('._sub-menu-active') ; 
      const activeBlock = document.querySelector('._sub-menu-open-active')  ; 
      if (activeLink && activeLink !== targetElement ) {
        activeLink.classList.remove('_sub-menu-active') ; 
        activeBlock.classList.remove('_sub-menu-open-active') ; 
      } 

      targetElement.classList.toggle('_sub-menu-active') ; 
      submenu.classList.toggle('_sub-menu-open-active') ; 
if (submenu.classList.contains('_sub-menu-open-active')) {
        targetElement.closest('.menu-catalog__list').classList.add('__active') ; 
      } else {
        targetElement.closest('.menu-catalog__list').classList.remove('__active') ; 
      
      }
      menuCatalogSubMenu.classList.add('_sub-menu-active')

      const subCatalogActive = document.querySelector('._sub-menu-open-active') ; 
      const subMenuCatalogCategory = subCatalogActive.querySelectorAll('.sub-menu-catalog__category') ;
      const subMenuCatalogList = subCatalogActive.querySelectorAll('.sub-menu-catalog__list') ; 
      const subMenuCatalogAll = subCatalogActive.querySelectorAll('.sub-menu-catalog__all') ;
      if (subCatalogActive)  {
      const lengthN = subMenuCatalogCategory.length + subMenuCatalogList.length - subMenuCatalogAll.length ; 
      if (lengthN === subMenuCatalogAll.length && subMenuCatalogCategory.length && subMenuCatalogCategory.length ) {
        subCatalogActive.style.cssText = `grid-template-columns: repeat(${lengthN} , 1fr) ; `
      }
      }
      

    }

   

  }

  if (targetElement.closest('.menu-catalog__back')) {
    document.documentElement.classList.remove('_open-active')
  }

  if (targetElement.closest('.sub-menu-catalog__back')) {
    document.querySelector('.sub-menu-catalog').classList.remove('_sub-menu-active') ;
    const subMenuOpenActive = document.querySelector('._sub-menu-open-active')
    if (subMenuOpenActive) {
        subMenuOpenActive.classList.remove('_sub-menu-open-active') ; 
    }
  }
})
if (document.querySelector('.mainslider__slider')) {
  const swiper = new Swiper('.mainslider__slider' , {
  observer: true ,  
  observeParents: true ,  
  slidesPerView: 1 , 
  autoHeight: true  , 
  spaceBetween: 50 , 
  speed: 800 , 
  loop: true , 
  autoplay: {
    delay: 2000 , 
  } , 
  pagination: { 
    el: '.controll-mainslider__dotts' , 
    clickable: true , 
  } , 
 
})
}

if (document.querySelector('.products-slider__slider')) {
  new Swiper('.products-slider__slider' , {
       observer: true ,  
  observeParents: true ,  
  slidesPerView: 4 , 
  autoHeight: true  , 
  spaceBetween: 20 , 
  speed: 800 , 
  loop: true ,
  pagination: {
    el: '.products-slider__dotts' ,  
    clickable: true ,

  } , 
  breakpoints: {
      320: {
        slidesPerView: 1 , 
        } , 
        560: {
            slidesPerView: 2 , 
        } , 
      768: {
        slidesPerView: 2 , 
      } , 
      992: {
        slidesPerView: 4 , 
        spaceBetween: 20 , 
      } , 
      1370: {
        slidesPerView: 4 , 
        spaceBetween: 30 , 
      }
  }
})
}
if (document.querySelector('.product-new__slider')) {
  new Swiper('.product-new__slider' , {
       observer: true ,  
  observeParents: true ,  
  slidesPerView: 4 , 
  autoHeight: true  , 
  spaceBetween: 20 , 
  speed: 800 , 
  loop: true ,
  pagination: {
    el: '.product-new__dotts' ,  
    clickable: true ,

  } , 
      breakpoints: {
      320: {
        slidesPerView: 1 , 
      }, 
      560: {
        slidesPerView: 2 , 
        } , 
      768: {
        slidesPerView: 2 , 
      } , 
      992: {
        slidesPerView: 3 , 
        spaceBetween: 20 , 
      } , 
      1370: {
        slidesPerView: 3 , 
        spaceBetween: 30 , 
      }
  }
})
}
const thumbsSwiper = new Swiper('.thumbs-images__swiper' , {
  observer: true ,  
  observeParents: true ,  
  slidesPerView: 4 , 
  autoHeight: true  , 
  spaceBetween: 15 , 
  speed: 800 , 
  loop: true ,
 
})
const mainProductSlider = new Swiper('.main-product__slider' , {
  observer: true ,  
  observeParents: true ,  
  slidesPerView: 1 , 
  autoHeight: true  , 
  spaceBetween: 20 , 
  speed: 800 , 
  loop: true ,
   thumbs: {
    swiper: thumbsSwiper ,
  }
  
})


document.querySelector('.menu__icon').addEventListener('click' , function () {
  this.classList.toggle('_active') ; 
  document.documentElement.classList.toggle('_over-active') ;
  if (document.documentElement.classList.contains('_open-active')) { 
    document.documentElement.classList.remove('_open-active') ;  
  } 
  if (!this.classList.contains('_active')) {
    document.documentElement.classList.remove('_over-active') ; 
    document.documentElement.classList.remove('_open-active')
   document.querySelector('.sub-menu-catalog').classList.remove('_sub-menu-active') ; 
   document.querySelector('.sub-menu-catalog__block').classList.remove('_sub-menu-open-active')

  }
  menuBody.classList.toggle('_open-active')
})
const quantityButtons = document.querySelectorAll('.quantity__button') ; 
for (let i = 0 ; i < quantityButtons.length ; i++ ) {
  quantityButtons[i].addEventListener('click' , function () {
    let value = parseInt(this.closest('.quantity').querySelector('.quantity__input').value) ; 
    if (this.classList.contains('quantity__button_minus')) {
      if (value > 1) value-- ;
    } else {
      value++ ; 
    }
    this.closest('.quantity').querySelector('.quantity__input').value = value ;
  })
}

const productInfoButton = document.querySelectorAll('.product-info__button') ; 
const productInfoBody = document.querySelectorAll('.product-info__body') ; 
for (let i = 0 ; i < productInfoButton.length ; i++ ) {
  productInfoButton[i].addEventListener('click' , function () {
      for (let l = 0 ; l < productInfoButton.length ; l++ ) {
        productInfoButton[l].classList.remove('__active') ; 
        productInfoBody[l].classList.remove('__actives')
      }
      this.classList.add('__active') ; 
      productInfoBody[i].classList.add('__actives') ; 

  })
}
  const subMenuCatalogList = document.querySelectorAll('.sub-menu-catalog__list') ; 
 const subMenuCatalogCategory = document.querySelectorAll('.sub-menu-catalog__category') ;   
 for (let i = 0 ; i < subMenuCatalogCategory.length ; i++ ) {
  subMenuCatalogCategory[i].addEventListener('click' , function (e) {
    e.preventDefault () ;  
      subMenuCatalogList[i].classList.add('_sub-menu-open-active') ; 
  })
 }

const priceFilterTitle = document.querySelector('.price-filter__title') ; 
priceFilterTitle.addEventListener('click' , function () {
  priceFilterTitle.classList.toggle('__active-title') ; 
  document.querySelector('.price-filter__body').classList.toggle('_active-range') ;
})

const itemFilterCatalogButton = document.querySelector('.item-filter-catalog__button') ;
const itemFilterCatalogMenu = document.querySelector('.item-filter-catalog__menu')  ; 
const itemFilterCatalogBody = document.querySelector('.item-filter-catalog__body') ; 
itemFilterCatalogButton.addEventListener('click' , function () {
    this.classList.toggle("__active-filter-checkbox") ; 
    itemFilterCatalogBody.classList.toggle('__active-checkbox-body') ; 
    if (itemFilterCatalogBody.classList.contains('__active-checkbox-body')) { 
      document.querySelector('.__active-checkbox-body').style.height = itemFilterCatalogMenu.offsetHeight + 'px' ;
    } else {
      itemFilterCatalogBody.removeAttribute('style') ; 
    }
})


const rangeItems = document.querySelectorAll('.input') ; 
const elementPriceFilterUi = document.querySelector('#price-filter__slide') ; 
    let rangeFromValue = document.querySelector('.input-from-range') ; 
      let  rangeToValue =   document.querySelector('[price-range-to]') ; 
    console.log(parseInt(rangeFromValue.value))
    console.log(rangeFromValue) ; 
    console.log(parseInt(rangeFromValue.dataset.priceFrom))
    noUiSlider.create(elementPriceFilterUi , { 
      start: [parseInt(rangeFromValue.value) , parseInt(rangeToValue.value)   ] , 
      connect: true  , 
      range: { 
        'min': [parseInt(rangeFromValue.getAttribute('price-range-from'))] , 
        'max': [parseInt(rangeToValue.getAttribute('price-range-to'))] 
      }
    })
  