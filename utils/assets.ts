import logo from "../assets/logo/logo.png"
import zakat from "../assets/images/zakat-programe.jpg"
import emergncy from "../assets/images/emergancy-relief.jpg"
import education from "../assets/images/education-support.jpg"
import type { StaticImageData } from "next/image"

export interface BrandLogo {
  logo: StaticImageData;
}

export const brandlogo: BrandLogo = {
  logo
}

export const homeBaanner:any = {
  zakat,
  emergncy,
  education
}