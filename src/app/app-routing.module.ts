import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaliySthitComponent } from './components/daliy-sthit/daliy-sthit.component';
import { HomeComponent } from './components/home/home.component';
import { RajyapalComponent } from './components/rajyapal/rajyapal.component';
import { MahilasadsyaComponent } from './components/mahilasadsya/mahilasadsya.component';
import { MukhyamantriComponent } from './components/mukhyamantri/mukhyamantri.component';
import { PithaseenComponent } from './components/pithaseen/pithaseen.component';
import { NetasadanComponent } from './components/netasadan/netasadan.component';
import { NetavirodhidalComponent } from './components/netavirodhidal/netavirodhidal.component';
import { PramukhsachivComponent } from './components/pramukhsachiv/pramukhsachiv.component';
import { SachivComponent } from './components/sachiv/sachiv.component';
import { AdhishthatamandalComponent } from './components/adhishthatamandal/adhishthatamandal.component';
import { SabhapatiComponent } from './components/sabhapati/sabhapati.component';
import { UpsabhapatiComponent } from './components/upsabhapati/upsabhapati.component';
import { SadsyaComponent } from './components/sadsya/sadsya.component';
import { SadanjankariComponent } from './components/sadanjankari/sadanjankari.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SadsyaaddressComponent } from './components/sadsyaaddress/sadsyaaddress.component';
import { SwaroopComponent } from './components/swaroop/swaroop.component';
import { SamitisComponent } from './components/samitis/samitis.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParichayDetailComponent } from './components/parichay-detail/parichay-detail.component';
import { DrSirSeetaRamComponent } from './components/profile/dr-sir-seeta-ram/dr-sir-seeta-ram.component';
import { ShriChandrabhalComponent } from './components/profile/shri-chandrabhal/shri-chandrabhal.component';
import { ShriChawdhariSukhramComponent } from './components/profile/shri-chawdhari-sukhram/shri-chawdhari-sukhram.component';
import { ShriDarbarilalComponent } from './components/profile/shri-darbarilal/shri-darbarilal.component';
import { ShriGaneshShankarComponent } from './components/profile/shri-ganesh-shankar/shri-ganesh-shankar.component';
import { ShriJagdeeshChandraComponent } from './components/profile/shri-jagdeesh-chandra/shri-jagdeesh-chandra.component';
import { ShriKunwarManvendraComponent } from './components/profile/shri-kunwar-manvendra/shri-kunwar-manvendra.component';
import { ShriNityanandSwamiComponent } from './components/profile/shri-nityanand-swami/shri-nityanand-swami.component';
import { ShriRaghunathVinayakComponent } from './components/profile/shri-raghunath-vinayak/shri-raghunath-vinayak.component';
import { ShriRameshYadavComponent } from './components/profile/shri-ramesh-yadav/shri-ramesh-yadav.component';
import { ShriShivPrasadComponent } from './components/profile/shri-shiv-prasad/shri-shiv-prasad.component';
import { ShriVirendraBahadurSinghComponent } from './components/profile/shri-virendra-bahadur-singh/shri-virendra-bahadur-singh.component';
import { ShriVirendraSwaroopComponent } from './components/profile/shri-virendra-swaroop/shri-virendra-swaroop.component';
import { CommitteenamelistComponent } from './components/committeenamelist/committeenamelist.component';
import { MukhyamantriProfileComponent } from './components/profile/mukhyamantri-profile/mukhyamantri-profile.component';
import { RajyapalProfileComponent } from './components/profile/rajyapal-profile/rajyapal-profile.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AcharSanhitaComponent } from './components/committees/achar-sanhita/achar-sanhita.component';
import { AshwashanComponent } from './components/committees/ashwashan/ashwashan.component';
import { VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent } from './components/committees/vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch/vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch.component';
import { DaiveeyApdaJanchComponent } from './components/committees/daiveey-apda-janch/daiveey-apda-janch.component';
import { KaryaPramarshDatryComponent } from './components/committees/karya-pramarsh-datry/karya-pramarsh-datry.component';
import { KhadyaPadarthoMeMilawatComponent } from './components/committees/khadya-padartho-me-milawat/khadya-padartho-me-milawat.component';
import { NeeyamPureekshanComponent } from './components/committees/neeyam-pureekshan/neeyam-pureekshan.component';
import { PradesheeyVidyutVyawasthaSambandhiJanchComponent } from './components/committees/pradesheey-vidyut-vyawastha-sambandhi-janch/pradesheey-vidyut-vyawastha-sambandhi-janch.component';
import { PrashnAvmSandarbhComponent } from './components/committees/prashn-avm-sandarbh/prashn-avm-sandarbh.component';
import { SansadeeyAdhyayanComponent } from './components/committees/sansadeey-adhyayan/sansadeey-adhyayan.component';
import { SansadeeyAvmSamajikSadbhavComponent } from './components/committees/sansadeey-avm-samajik-sadbhav/sansadeey-avm-samajik-sadbhav.component';
import { ShikshaKaVyavsaikaranComponent } from './components/committees/shiksha-ka-vyavsaikaran/shiksha-ka-vyavsaikaran.component';
import { VidhaiSamadhikarComponent } from './components/committees/vidhai-samadhikar/vidhai-samadhikar.component';
import { VikasPradhikaranComponent } from './components/committees/vikas-pradhikaran/vikas-pradhikaran.component';
import { ViniyamanSamikshaComponent } from './components/committees/viniyaman-samiksha/viniyaman-samiksha.component';
import { VisheshadhikarComponent } from './components/committees/visheshadhikar/visheshadhikar.component';
import { VitteeyAvmPrashaskeeyVilambComponent } from './components/committees/vitteey-avm-prashaskeey-vilamb/vitteey-avm-prashaskeey-vilamb.component';
import { YachikaComponent } from './components/committees/yachika/yachika.component';
import { Album1Component } from './components/gallery/album1/album1.component';
import { Album2Component } from './components/gallery/album2/album2.component';
import { Album3Component } from './components/gallery/album3/album3.component';
import { Album4Component } from './components/gallery/album4/album4.component';
import { Album5Component } from './components/gallery/album5/album5.component';
import { Album6Component } from './components/gallery/album6/album6.component';
import { Album7Component } from './components/gallery/album7/album7.component';
import { Album8Component } from './components/gallery/album8/album8.component';
import { Album9Component } from './components/gallery/album9/album9.component';
import { Album10Component } from './components/gallery/album10/album10.component';
import { Album11Component } from './components/gallery/album11/album11.component';
import { Album12Component } from './components/gallery/album12/album12.component';
import { Album13Component } from './components/gallery/album13/album13.component';
import { OfficersComponent } from './components/officers/officers.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'parichay-detail',
    component: ParichayDetailComponent,
  },
  {
    path: 'rajyapal',
    component: RajyapalComponent,
  },
  {
    path: 'mukhyamantri',
    component: MukhyamantriComponent,
  },
  {
    path: 'pithaseen',
    component: PithaseenComponent,
  },
  {
    path: 'pithaseen/info',
    component: ProfileComponent,
  },
  {
    path: 'netasadan',
    component: NetasadanComponent,
  },
  {
    path: 'netavirodhidal',
    component: NetavirodhidalComponent,
  },
  {
    path: 'pramukhsachiv',
    component: PramukhsachivComponent,
  },
  {
    path: 'officers',
    component: OfficersComponent,
  },
  {
    path: 'sachiv',
    component: SachivComponent,
  },
  {
    path: 'adhishthata',
    component: AdhishthatamandalComponent,
  },
  {
    path: 'sabhapati',
    component: PithaseenComponent,
  },
  {
    path: 'upsabhapati',
    component: UpsabhapatiComponent,
  },
  {
    path: 'sadsya',
    component: SadsyaComponent,
  },
  {
    path: 'mahilasadsya',
    component: MahilasadsyaComponent,
  },
  {
    path: 'samitis',
    component: SamitisComponent,
    data: { animation: 'SamitisPage' },
    children: [
      {
        path: '',
        component: KaryaPramarshDatryComponent,
      },
      {
        path: 'acharsanhita',
        component: AcharSanhitaComponent,
      },
      {
        path: 'ashwashan',
        component: AshwashanComponent,
      },
      {
        path: 'daiveeyapdajanch',
        component: DaiveeyApdaJanchComponent,
      },
      {
        path: 'karyapramarshdatry',
        component: KaryaPramarshDatryComponent,
      },
      {
        path: 'khadyapadarthomemilawat',
        component: KhadyaPadarthoMeMilawatComponent,
      },
      {
        path: 'neeyampureekshan',
        component: NeeyamPureekshanComponent,
      },
      {
        path: 'pradesheeyvidyutvyawasthasambandhitjanch',
        component: PradesheeyVidyutVyawasthaSambandhiJanchComponent,
      },
      {
        path: 'prashnavmsandarbh',
        component: PrashnAvmSandarbhComponent,
      },
      {
        path: 'sansadeeyadhyayan',
        component: SansadeeyAdhyayanComponent,
      },
      {
        path: 'sansadeeyavmsamajiksadbhav',
        component: SansadeeyAvmSamajikSadbhavComponent,
      },
      {
        path: 'shikshakavyavasaikaran',
        component: ShikshaKaVyavsaikaranComponent,
      },
      {
        path: 'vidhaisamadhikar',
        component: VidhaiSamadhikarComponent,
      },
      {
        path: 'awaseeyparivad',
        component: VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent,
      },
      {
        path: 'vikaspradhikaran',
        component: VikasPradhikaranComponent,
      },
      {
        path: 'viniyamansamiksha',
        component: ViniyamanSamikshaComponent,
      },
      {
        path: 'visheshadhikar',
        component: VisheshadhikarComponent,
      },
      {
        path: 'vitteeyavmprashaskeeyvilamb',
        component: VitteeyAvmPrashaskeeyVilambComponent,
      },
      {
        path: 'yachika',
        component: YachikaComponent,
      },
    ],
  },
  {
    path: 'daliy-sthit',
    component: DaliySthitComponent,
  },
  {
    path: 'sadanjankari',
    component: SadanjankariComponent,
  },
  {
    path: 'sadanjankari/membersadd',
    component: SadsyaaddressComponent,
  },
  {
    path: 'sadanjankari/swaroop',
    component: SwaroopComponent,
  },
  {
    path: 'sadanjankari/committeenamelist',
    component: CommitteenamelistComponent,
  },
  {
    path: 'contact_us',
    component: ContactUsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {
        path: '',
        component: Album13Component,
      },
      {
        path: 'album1',
        component: Album1Component,
      },
      {
        path: 'album2',
        component: Album2Component,
      },
      {
        path: 'album3',
        component: Album3Component,
      },
      {
        path: 'album4',
        component: Album4Component,
      },
      {
        path: 'album5',
        component: Album5Component,
      },
      {
        path: 'album6',
        component: Album6Component,
      },
      {
        path: 'album7',
        component: Album7Component,
      },
      {
        path: 'album8',
        component: Album8Component,
      },
      {
        path: 'album9',
        component: Album9Component,
      },
      {
        path: 'album10',
        component: Album10Component,
      },
      {
        path: 'album11',
        component: Album11Component,
      },
      {
        path: 'album12',
        component: Album12Component,
      },
      {
        path: 'album13',
        component: Album13Component,
      },
    ],
  },
  {
    path: 'mukhyamantri_profile',
    component: MukhyamantriProfileComponent,
  },
  {
    path: 'rajyapal_profile',
    component: RajyapalProfileComponent,
  },
  {
    path: 'drsirsitaram',
    component: DrSirSeetaRamComponent,
  },
  {
    path: 'shrichandrabhan',
    component: ShriChandrabhalComponent,
  },
  {
    path: 'chawdharisukhramsingh',
    component: ShriChawdhariSukhramComponent,
  },
  {
    path: 'shridarbarilal',
    component: ShriDarbarilalComponent,
  },
  {
    path: 'shriganesh',
    component: ShriGaneshShankarComponent,
  },
  {
    path: 'shrijagdish',
    component: ShriJagdeeshChandraComponent,
  },
  {
    path: 'shrikunwarmanvendra',
    component: ShriKunwarManvendraComponent,
  },
  {
    path: 'shrinityanand',
    component: ShriNityanandSwamiComponent,
  },
  {
    path: 'shriraghunath',
    component: ShriRaghunathVinayakComponent,
  },
  {
    path: 'shrirameshyadav',
    component: ShriRameshYadavComponent,
  },
  {
    path: 'shrishivprasad',
    component: ShriShivPrasadComponent,
  },
  {
    path: 'shrivirendrabahadur',
    component: ShriVirendraBahadurSinghComponent,
  },
  {
    path: 'shrivirendraswaroop',
    component: ShriVirendraSwaroopComponent,
  },
  {
    path: 'facilities',
    component: FacilitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
