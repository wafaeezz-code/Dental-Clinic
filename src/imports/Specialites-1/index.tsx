import svgPaths from "./svg-nj9m30wigy";
import imgDepartment11Jpg from "../../assets/13fcd1d366638a51e5541c23296811fa1f20d0c9.png";
import imgAgadirBayDentalClinicLogo1 from "../../assets/049e18c660c202068054f76dac750df540371106.png";
import imgBackground from "../../assets/51e6edc7a217cbef1a57061dabbbcf76f6452a75.png";
import imgGoogleMapPlaceholder1024X608Webp from "../../assets/c807e8c72fb2e3e8c342be0700b1ff3428049648.png";
import { imgGroup, imgGroup1 } from "./svg-usm4b";

function Section() {
  return <div className="absolute h-px left-0 right-0 top-[1034.53px]" data-name="Section" />;
}

function Department11Jpg() {
  return (
    <div className="h-[319.69px] max-w-[620px] overflow-clip relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[620px]" data-name="department-1-1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[15px] rounded-tr-[15px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDepartment11Jpg} />
      </div>
      <div className="absolute h-[413px] left-0 top-[-47px] w-[620px]" data-name="ChatGPT Image Jul 25, 2025, 04_35_44 PM 2" />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Department11Jpg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.95%_3.15%_1.95%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.27px] mask-size-[65px_65px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.955 62.4609">
        <g id="Group">
          <path d={svgPaths.p196e2600} fill="var(--fill-0, #E1F8FA)" id="Vector" />
          <path d={svgPaths.p1c8c31c0} fill="var(--fill-0, #E1F8FA)" id="Vector_2" />
          <path d={svgPaths.p716bf80} fill="var(--fill-0, #E1F8FA)" id="Vector_3" />
          <path d={svgPaths.p257e6600} fill="var(--fill-0, #173435)" id="Vector_4" />
          <path d={svgPaths.p2af2c800} fill="var(--fill-0, #5CD8DF)" id="Vector_5" />
          <path d={svgPaths.p32b99b00} fill="var(--fill-0, #5CD8DF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[65px]" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex items-start p-[25px] relative rounded-[57.5px] shrink-0" data-name="Background">
      <Svg />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[-18.77%] content-stretch flex flex-col items-start left-[30px] max-w-[1440px] top-[79.82%]" data-name="Container">
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[319.69px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col h-[319.69px] items-start relative shrink-0 w-full" data-name="Section">
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">En savoir plus</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Icon">
          <path d={svgPaths.p9e0eb00} fill="var(--fill-0, #14BEC9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center pl-px relative shrink-0 size-[12px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Margin />
      <Container6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[26px] whitespace-nowrap">
        <p className="leading-[35px]">Chirurgie implantaire guidée et Parodontologie</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#657e7e] text-[18px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[31.5px] mb-0">{`L'implantologie dentaire est une solution moderne et fiable pour `}</p>
        <p className="leading-[31.5px] mb-0">{`remplacer les dents perdues, en offrant aux patients une `}</p>
        <p className="leading-[31.5px]">alternative durable et esthétiquement agréable.</p>
      </div>
      <Container5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[40px] px-[40px] relative size-full">
        <Frame13 />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center relative rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] shrink-0 w-[620px]" data-name="Overlay+Shadow">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Department11Jpg1() {
  return (
    <div className="h-[319.69px] max-w-[620px] overflow-clip relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[620px]" data-name="department-1-1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[15px] rounded-tr-[15px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDepartment11Jpg} />
      </div>
      <div className="absolute h-[413px] left-0 top-[-47px] w-[620px]" data-name="ChatGPT Image Jul 25, 2025, 04_13_30 PM 2" />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Department11Jpg1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.95%_3.15%_1.95%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.27px] mask-size-[65px_65px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.955 62.4609">
        <g id="Group">
          <path d={svgPaths.p196e2600} fill="var(--fill-0, #E1F8FA)" id="Vector" />
          <path d={svgPaths.p1c8c31c0} fill="var(--fill-0, #E1F8FA)" id="Vector_2" />
          <path d={svgPaths.p716bf80} fill="var(--fill-0, #E1F8FA)" id="Vector_3" />
          <path d={svgPaths.p257e6600} fill="var(--fill-0, #173435)" id="Vector_4" />
          <path d={svgPaths.p2af2c800} fill="var(--fill-0, #5CD8DF)" id="Vector_5" />
          <path d={svgPaths.p32b99b00} fill="var(--fill-0, #5CD8DF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[65px]" data-name="SVG">
      <ClipPathGroup1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex items-start p-[25px] relative rounded-[57.5px] shrink-0" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[-18.77%] content-stretch flex flex-col items-start left-[30px] max-w-[1440px] top-[79.82%]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[319.69px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col h-[319.69px] items-start relative shrink-0 w-full" data-name="Section">
      <Container8 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">En savoir plus</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Icon">
          <path d={svgPaths.p9e0eb00} fill="var(--fill-0, #14BEC9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center pl-px relative shrink-0 size-[12px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Margin1 />
      <Container14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[26px] whitespace-nowrap">
        <p className="leading-[35px]">Réhabilitations esthétiques et fonctionnelles</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#657e7e] text-[18px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[31.5px] mb-0">{`Les réhabilitations esthétiques et fonctionnelles visent à `}</p>
        <p className="leading-[31.5px] mb-0">{`restaurer à la fois l’apparence et la fonctionnalité du sourire, `}</p>
        <p className="leading-[31.5px]">en traitant les problèmes de dents usées.</p>
      </div>
      <Container13 />
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[40px] px-[40px] relative size-full">
        <Frame15 />
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center relative rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] shrink-0 w-[620px]" data-name="Overlay+Shadow">
      <Section3 />
      <Section4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] relative size-full">
          <OverlayShadow />
          <OverlayShadow1 />
        </div>
      </div>
    </div>
  );
}

function Department11Jpg2() {
  return (
    <div className="h-[319.69px] max-w-[620px] overflow-clip relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[620px]" data-name="department-1-1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[15px] rounded-tr-[15px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDepartment11Jpg} />
      </div>
      <div className="absolute h-[413px] left-0 top-[-46.69px] w-[620px]" data-name="ChatGPT Image Jul 25, 2025, 04_22_10 PM 2" />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Department11Jpg2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container19 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.95%_3.15%_1.95%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.27px] mask-size-[65px_65px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.955 62.4609">
        <g id="Group">
          <path d={svgPaths.p196e2600} fill="var(--fill-0, #E1F8FA)" id="Vector" />
          <path d={svgPaths.p1c8c31c0} fill="var(--fill-0, #E1F8FA)" id="Vector_2" />
          <path d={svgPaths.p716bf80} fill="var(--fill-0, #E1F8FA)" id="Vector_3" />
          <path d={svgPaths.p257e6600} fill="var(--fill-0, #173435)" id="Vector_4" />
          <path d={svgPaths.p2af2c800} fill="var(--fill-0, #5CD8DF)" id="Vector_5" />
          <path d={svgPaths.p32b99b00} fill="var(--fill-0, #5CD8DF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[65px]" data-name="SVG">
      <ClipPathGroup2 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex items-start p-[25px] relative rounded-[57.5px] shrink-0" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-[-18.77%] content-stretch flex flex-col items-start left-[30px] max-w-[1440px] top-[79.82%]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[319.69px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col h-[319.69px] items-start relative shrink-0 w-full" data-name="Section">
      <Container16 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">En savoir plus</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[12px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Icon">
          <path d={svgPaths.p9e0eb00} fill="var(--fill-0, #14BEC9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center pl-px relative shrink-0 size-[12px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Margin2 />
      <Container22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[26px] whitespace-nowrap">
        <p className="leading-[35px]">Radiologie dentaire numérique</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#657e7e] text-[18px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[31.5px] mb-0">{`La radiologie dentaire numérique permet un diagnostic précis et `}</p>
        <p className="leading-[31.5px] mb-0">{`rapide grâce à des images à haute résolution. En remplaçant `}</p>
        <p className="leading-[31.5px]">les anciennes radiographies sur film.</p>
      </div>
      <Container21 />
    </div>
  );
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[40px] px-[40px] relative size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center relative rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] shrink-0 w-[620px]" data-name="Overlay+Shadow">
      <Section5 />
      <Section6 />
    </div>
  );
}

function Department11Jpg4() {
  return (
    <div className="h-[319.69px] max-w-[620px] overflow-clip relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[620px]" data-name="department-1-1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[15px] rounded-tr-[15px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDepartment11Jpg} />
      </div>
      <div className="absolute h-[413px] left-0 top-[-47px] w-[620px]" data-name="ChatGPT Image Jul 25, 2025, 04_13_30 PM 2" />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 top-[2.31px]" data-name="Link">
      <Department11Jpg4 />
    </div>
  );
}

function Department11Jpg3() {
  return (
    <div className="h-[319.69px] max-w-[620px] overflow-clip relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[620px]" data-name="department-1-1.jpg">
      <Link4 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Department11Jpg3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Container">
      <Container27 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[1.95%_3.15%_1.95%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.27px] mask-size-[65px_65px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.955 62.4609">
        <g id="Group">
          <path d={svgPaths.p196e2600} fill="var(--fill-0, #E1F8FA)" id="Vector" />
          <path d={svgPaths.p1c8c31c0} fill="var(--fill-0, #E1F8FA)" id="Vector_2" />
          <path d={svgPaths.p716bf80} fill="var(--fill-0, #E1F8FA)" id="Vector_3" />
          <path d={svgPaths.p257e6600} fill="var(--fill-0, #173435)" id="Vector_4" />
          <path d={svgPaths.p2af2c800} fill="var(--fill-0, #5CD8DF)" id="Vector_5" />
          <path d={svgPaths.p32b99b00} fill="var(--fill-0, #5CD8DF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[65px]" data-name="SVG">
      <ClipPathGroup3 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex items-start p-[25px] relative rounded-[57.5px] shrink-0" data-name="Background">
      <Svg3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bottom-[-18.77%] content-stretch flex flex-col items-start left-[30px] max-w-[1440px] top-[79.82%]" data-name="Container">
      <Background3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start justify-center min-w-px relative self-stretch" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[319.69px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Section7() {
  return (
    <div className="content-stretch flex flex-col h-[319.69px] items-start relative shrink-0 w-full" data-name="Section">
      <Container24 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">En savoir plus</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[12px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g id="Icon">
          <path d={svgPaths.p9e0eb00} fill="var(--fill-0, #14BEC9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center pl-px relative shrink-0 size-[12px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Margin3 />
      <Container30 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[26px] whitespace-nowrap">
        <p className="leading-[35px]">Orthodontie</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#657e7e] text-[18px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[31.5px] mb-0">{`L'orthodontie offre des solutions pour corriger les malpositions `}</p>
        <p className="leading-[31.5px] mb-0">{`dentaires et les problèmes d'alignement, afin d'améliorer la `}</p>
        <p className="leading-[31.5px]">{`fonction dentaire et l'esthétique du sourire.`}</p>
      </div>
      <Container29 />
    </div>
  );
}

function Section8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[40px] px-[40px] relative size-full">
        <Frame19 />
      </div>
    </div>
  );
}

function OverlayShadow3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center relative rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] shrink-0 w-[620px]" data-name="Overlay+Shadow">
      <Section7 />
      <Section8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] relative size-full">
          <OverlayShadow2 />
          <OverlayShadow3 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-0 top-[685px] w-[1440px]">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.0059">
        <g id="Icon">
          <path d={svgPaths.p71f6f80} fill="var(--fill-0, #14BEC9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[19px]" data-name="SVG">
      <div className="absolute flex inset-[-20%_0_0_5.26%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[7px] relative size-full">
        <Svg4 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Container">
      <Container33 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[13px] whitespace-nowrap">
        <p className="leading-[26px]">+212 5 28 23 23 48​</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-px" data-name="Vertical Divider">
        <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t-18 inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1104.050048828125px] relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.625px_-0.625px] mask-size-[15px_15px]" style={{ maskImage: `url("${imgGroup1}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 13.75">
        <g id="Group">
          <path d={svgPaths.p1ce13d80} fill="var(--fill-0, #39B7BB)" id="Vector" />
          <path d={svgPaths.p1dc1030} fill="var(--fill-0, #39B7BB)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <ClipPathGroup4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[7px] relative size-full">
        <Svg5 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container37 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[13px] whitespace-nowrap">
        <p className="leading-[26px]">9:00 H - 18:00 H</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[18px] items-start relative shrink-0" data-name="Container">
      <div className="relative self-stretch shrink-0 w-px" data-name="Vertical Divider">
        <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t-18 inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1104.050048828125px] relative shrink-0" data-name="Container">
      <Container39 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="SVG">
          <path d={svgPaths.p36633780} fill="var(--fill-0, #5CD8DF)" id="Vector" />
          <path d={svgPaths.pad9be00} fill="var(--fill-0, #39B7BB)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[6px] relative size-full">
        <Svg6 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container41 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[13px] whitespace-nowrap">
        <p className="leading-[26px]">Agadir Bay Technopole 2 Immeuble A9, Bloc A, Étage 4, N° 409​</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Container32 />
      <Container34 />
      <Container36 />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#39b7bb] text-[13px] text-right whitespace-nowrap">
        <p className="leading-[13px]">{`\uF39E`}</p>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="h-[13px] relative shrink-0 w-[11px]" data-name="instagram 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g clipPath="url(#clip0_5_3220)" id="instagram 1">
          <path d={svgPaths.p4253df0} fill="var(--fill-0, #39B7BB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_3220">
            <rect fill="white" height="13" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#39b7bb] text-[13px] text-right whitespace-nowrap">
        <p className="leading-[13px]">{`\uF0E1`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
      <Link5 />
      <Instagram />
      <Link6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[46px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e2e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[8px] relative size-full">
          <Frame />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function LinkMenuItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[19.5px]">Accueil</p>
      </div>
    </div>
  );
}

function LinkMenuItem1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
  );
}

function LinkMenuItem2() {
  return (
    <div className="bg-[#e1f8fa] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#39b7bb] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Spécialités</p>
      </div>
    </div>
  );
}

function LinkMenuItem3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[19.5px]">Technologies</p>
      </div>
    </div>
  );
}

function LinkMenuItem4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[19.5px]">Galerie</p>
      </div>
    </div>
  );
}

function LinkMenuItem5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Link - Menu item">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[19.5px]">Contact</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LinkMenuItem1 />
      <LinkMenuItem2 />
      <LinkMenuItem3 />
      <LinkMenuItem4 />
      <LinkMenuItem5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-0 mt-0 relative row-1">
      <LinkMenuItem />
      <Frame1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#39b7bb] content-stretch flex h-[50px] items-start max-h-[50px] pb-[14px] pl-[23px] pr-[36px] pt-[12px] relative rounded-[30px] shrink-0 w-[227px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#39b7bb] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Prendre un rendez-vous</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between px-[80px] py-[24px] relative shrink-0 w-[1440px]">
      <div className="h-[60px] relative shrink-0 w-[160px]" data-name="agadir-bay-dental-clinic-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAgadirBayDentalClinicLogo1} />
      </div>
      <Group5 />
      <Button />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#d8dede] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">/</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container47 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[7px] relative shrink-0" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#5cd8df] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Accueil</p>
      </div>
      <Margin4 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#657e7e] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Spécialités</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[20px] px-[21px] py-[6px] rounded-[30px] top-[303.5px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d8dede] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Container45 />
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-0 items-center pb-[137.61px] pt-[117.59px] px-[20px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[54px] tracking-[-1px] whitespace-nowrap">
            <p className="leading-[64.8px]">Spécialités</p>
          </div>
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[320.2px] items-start justify-center max-w-[1320px] min-h-[320px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
    </div>
  );
}

function Section9() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-w-px relative" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[30px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute content-start flex flex-wrap inset-[240px_30px_2057px_30px] items-start justify-center rounded-[15px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15px]">
        <img alt="" className="absolute h-full left-[-17.39%] max-w-none top-0 w-[134.78%]" src={imgBackground} />
      </div>
      <Section9 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[60px] relative shrink-0 w-[160px]" data-name="agadir-bay-dental-clinic-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAgadirBayDentalClinicLogo1} />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[21px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#d8dede] border-b border-solid inset-0 pointer-events-none" />
      <Container49 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <HorizontalBorder />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[91px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container48 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#657e7e] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[28px] mb-0">{`Un sourire sain commence ici. Agadir Bay Dental Clinic , votre partenaire `}</p>
        <p className="leading-[28px]">dentaire.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container51 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[96px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container50 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[302.8px]">
      <Margin5 />
      <Margin6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Accueil</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Technologies</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Link7 />
      <Link8 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Spécialités</p>
      </div>
      <Link9 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Galerie</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[59px]">
      <Link10 />
      <Link12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[195px]">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#173435] text-[21px] w-full">
        <p className="leading-[29.4px]">Liens utiles</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#173435] text-[21px] w-full">
        <p className="leading-[29.4px]">Contact</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[60.39px] items-start justify-center pb-[30px] relative shrink-0 w-full" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[1px] whitespace-nowrap">
        <p className="leading-[19.6px]">Adresse</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[76.41999816894531px] relative shrink-0 w-[61px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[41.99px] pt-[5px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#657e7e] text-[16px] w-[317px]">
        <p className="leading-[28px]">Immeuble A9, Bloc A, Etage 4, N°409, Agadir Bay, Technopole 2, Agadir 80010</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Item">
      <Container55 />
      <Container58 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[1px] whitespace-nowrap">
        <p className="leading-[19.6px]">Téléphone</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[57.689998626708984px] relative shrink-0 w-[57.69px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">+212 5 28 23 23 48</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Container">
      <Link13 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Item">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[1px] whitespace-nowrap">
        <p className="leading-[19.6px]">Email</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[57.779998779296875px] relative shrink-0 w-[40px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container64 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#173435] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">fanilahcen@hotmail.com</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0" data-name="Container">
      <Link14 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0 w-full" data-name="Item">
      <Container63 />
      <Container66 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[233.78px] items-start relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 w-[277.19px]" data-name="Container">
      <Margin7 />
      <Container54 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#173435] text-[21px] w-full">
        <p className="leading-[29.4px]">Localisation</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[60.39px] items-start justify-center pb-[30px] relative shrink-0 w-full" data-name="Margin">
      <Container68 />
    </div>
  );
}

function GoogleMapPlaceholder1024X608Webp() {
  return (
    <div className="h-[200px] max-w-[263.5899963378906px] relative shrink-0 w-[263.59px]" data-name="google-map-placeholder-1024x608.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-13.9%] max-w-none top-0 w-[127.79%]" src={imgGoogleMapPlaceholder1024X608Webp} />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Margin8 />
      <GoogleMapPlaceholder1024X608Webp />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[70px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame10 />
      <Container52 />
      <Container67 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5cd8df] text-[13px] text-right whitespace-nowrap">
        <p className="leading-[13px]">{`\uF39E`}</p>
      </div>
    </div>
  );
}

function Instagram1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[11px]" data-name="instagram 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g clipPath="url(#clip0_5_3246)" id="instagram 1">
          <path d={svgPaths.p4253df0} fill="var(--fill-0, #5CD8DF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_3246">
            <rect fill="white" height="13" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5cd8df] text-[13px] text-right whitespace-nowrap">
        <p className="leading-[13px]">{`\uF0E1`}</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
      <Link15 />
      <Instagram1 />
      <Link16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[24px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#d8dede] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#657e7e] text-[16px] w-[400px]">
        <p className="leading-[28px]">Agadir Bay Dental Clinic © 2026 - Tous droits réservés</p>
      </div>
      <Container69 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center justify-center left-0 pb-[24px] pt-[80px] px-[80px] top-[2057px] w-[1440px]">
      <Frame11 />
      <Frame5 />
    </div>
  );
}

export default function Specialites() {
  return (
    <div className="bg-white relative size-full" data-name="Spécialités">
      <Section />
      <Frame16 />
      <Frame12 />
      <Background4 />
      <Frame20 />
    </div>
  );
}