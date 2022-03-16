import React, {useEffect} from 'react'
import styles from './styles.module.css'
import './css/tailwind.css';
import {VideoLightbox} from "./VideoLightbox";
import {ImageGridGallery} from "./ImageGridGallery";
import {ImageGridSlideshow} from "./ImageGridSlideshow";
import {ImageGridSlideshowNoAnim} from "./ImageGridSlideshowNoAnim";
import {SlideshowControls} from "./SlideshowControls";
import Carousel from "./Carousel"
import {CarouselItem} from "./Carousel";
import {Lightbox} from "./Lightbox";
import {Lightbox2} from "./Lightbox2";
import {Image} from "./Image";
import {LightboxZoomAnim} from "./LightboxZoomAnim";
import {SlideshowAnim} from "./SlideshowAnim";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPause, faClose, faPlus, faMinus, 
  faMagnifyingGlassPlus, faMagnifyingGlassMinus, faBorderAll, faTableCellsLarge, faTable, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause, faClose, faPlus, faMinus, faExpand, faMagnifyingGlassPlus, faCompress, faMagnifyingGlassMinus, faBorderAll, faTableCellsLarge);

export const ExampleComponent = ({ text }) => {
  return <div className="text-4xl italic text-purple-200">Example Component: {text}</div>
}

export { VideoLightbox, SlideshowControls, Image, Lightbox2, ImageGridGallery, SlideshowAnim, ImageGridSlideshow, ImageGridSlideshowNoAnim, Carousel, CarouselItem , Lightbox, LightboxZoomAnim}