import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { DaliySthitComponent } from './components/daliy-sthit/daliy-sthit.component';
import { HomeComponent } from './components/home/home.component';
import { RajyapalComponent } from './components/rajyapal/rajyapal.component';
import { MukhyamantriComponent } from './components/mukhyamantri/mukhyamantri.component';
import { SabhapatiComponent } from './components/sabhapati/sabhapati.component';
import { UpsabhapatiComponent } from './components/upsabhapati/upsabhapati.component';
import { PramukhsachivComponent } from './components/pramukhsachiv/pramukhsachiv.component';
import { SachivComponent } from './components/sachiv/sachiv.component';
import { SadsyaComponent } from './components/sadsya/sadsya.component';
import { MahilasadsyaComponent } from './components/mahilasadsya/mahilasadsya.component';
import { PithaseenComponent } from './components/pithaseen/pithaseen.component';
import { NetasadanComponent } from './components/netasadan/netasadan.component';
import { NetavirodhidalComponent } from './components/netavirodhidal/netavirodhidal.component';
import { SadsyaaddressComponent } from './components/sadsyaaddress/sadsyaaddress.component';
import { UpgathanswaroopComponent } from './components/upgathanswaroop/upgathanswaroop.component';
import { AdhishthatamandalComponent } from './components/adhishthatamandal/adhishthatamandal.component';
import { SadanjankariComponent } from './components/sadanjankari/sadanjankari.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MembersaddComponent } from './components/membersadd/membersadd.component';
import { SwaroopComponent } from './components/swaroop/swaroop.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SamitisComponent } from './components/samitis/samitis.component';
import { ParichayDetailComponent } from './components/parichay-detail/parichay-detail.component';
import { DrSirSeetaRamComponent } from './components/profile/dr-sir-seeta-ram/dr-sir-seeta-ram.component';
import { ShriChandrabhalComponent } from './components/profile/shri-chandrabhal/shri-chandrabhal.component';
import { ShriRaghunathVinayakComponent } from './components/profile/shri-raghunath-vinayak/shri-raghunath-vinayak.component';
import { ShriDarbarilalComponent } from './components/profile/shri-darbarilal/shri-darbarilal.component';
import { ShriVirendraSwaroopComponent } from './components/profile/shri-virendra-swaroop/shri-virendra-swaroop.component';
import { ShriVirendraBahadurSinghComponent } from './components/profile/shri-virendra-bahadur-singh/shri-virendra-bahadur-singh.component';
import { ShriJagdeeshChandraComponent } from './components/profile/shri-jagdeesh-chandra/shri-jagdeesh-chandra.component';
import { ShriShivPrasadComponent } from './components/profile/shri-shiv-prasad/shri-shiv-prasad.component';
import { ShriNityanandSwamiComponent } from './components/profile/shri-nityanand-swami/shri-nityanand-swami.component';
import { ShriChawdhariSukhramComponent } from './components/profile/shri-chawdhari-sukhram/shri-chawdhari-sukhram.component';
import { ShriGaneshShankarComponent } from './components/profile/shri-ganesh-shankar/shri-ganesh-shankar.component';
import { ShriRameshYadavComponent } from './components/profile/shri-ramesh-yadav/shri-ramesh-yadav.component';
import { ShriKunwarManvendraComponent } from './components/profile/shri-kunwar-manvendra/shri-kunwar-manvendra.component';
import { CommitteenamelistComponent } from './components/committeenamelist/committeenamelist.component';
import { MukhyamantriProfileComponent } from './components/profile/mukhyamantri-profile/mukhyamantri-profile.component';
import { RajyapalProfileComponent } from './components/profile/rajyapal-profile/rajyapal-profile.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { KaryaPramarshDatryComponent } from './components/committees/karya-pramarsh-datry/karya-pramarsh-datry.component';
import { ShikshaKaVyavsaikaranComponent } from './components/committees/shiksha-ka-vyavsaikaran/shiksha-ka-vyavsaikaran.component';
import { DaiveeyApdaJanchComponent } from './components/committees/daiveey-apda-janch/daiveey-apda-janch.component';
import { AcharSanhitaComponent } from './components/committees/achar-sanhita/achar-sanhita.component';
import { NeeyamPureekshanComponent } from './components/committees/neeyam-pureekshan/neeyam-pureekshan.component';
import { VisheshadhikarComponent } from './components/committees/visheshadhikar/visheshadhikar.component';
import { YachikaComponent } from './components/committees/yachika/yachika.component';
import { AshwashanComponent } from './components/committees/ashwashan/ashwashan.component';
import { VitteeyAvmPrashaskeeyVilambComponent } from './components/committees/vitteey-avm-prashaskeey-vilamb/vitteey-avm-prashaskeey-vilamb.component';
import { PrashnAvmSandarbhComponent } from './components/committees/prashn-avm-sandarbh/prashn-avm-sandarbh.component';
import { SansadeeyAvmSamajikSadbhavComponent } from './components/committees/sansadeey-avm-samajik-sadbhav/sansadeey-avm-samajik-sadbhav.component';
import { VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent } from './components/committees/vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch/vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch.component';
import { VikasPradhikaranComponent } from './components/committees/vikas-pradhikaran/vikas-pradhikaran.component';
import { PradesheeyVidyutVyawasthaSambandhiJanchComponent } from './components/committees/pradesheey-vidyut-vyawastha-sambandhi-janch/pradesheey-vidyut-vyawastha-sambandhi-janch.component';
import { ViniyamanSamikshaComponent } from './components/committees/viniyaman-samiksha/viniyaman-samiksha.component';
import { KhadyaPadarthoMeMilawatComponent } from './components/committees/khadya-padartho-me-milawat/khadya-padartho-me-milawat.component';
import { SansadeeyAdhyayanComponent } from './components/committees/sansadeey-adhyayan/sansadeey-adhyayan.component';
import { VidhaiSamadhikarComponent } from './components/committees/vidhai-samadhikar/vidhai-samadhikar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SamitisComponent,
    DaliySthitComponent,
    HomeComponent,
    RajyapalComponent,
    MukhyamantriComponent,
    SabhapatiComponent,
    UpsabhapatiComponent,
    PramukhsachivComponent,
    SachivComponent,
    SadsyaComponent,
    MahilasadsyaComponent,
    PithaseenComponent,
    NetasadanComponent,
    NetavirodhidalComponent,
    SadsyaaddressComponent,
    UpgathanswaroopComponent,
    AdhishthatamandalComponent,
    SadanjankariComponent,
    GalleryComponent,
    ContactUsComponent,
    MembersaddComponent,
    SwaroopComponent,
    FooterComponent,
    ProfileComponent,
    ParichayDetailComponent,
    DrSirSeetaRamComponent,
    ShriChandrabhalComponent,
    ShriRaghunathVinayakComponent,
    ShriDarbarilalComponent,
    ShriVirendraSwaroopComponent,
    ShriVirendraBahadurSinghComponent,
    ShriJagdeeshChandraComponent,
    ShriShivPrasadComponent,
    ShriNityanandSwamiComponent,
    ShriChawdhariSukhramComponent,
    ShriGaneshShankarComponent,
    ShriRameshYadavComponent,
    ShriKunwarManvendraComponent,
    CommitteenamelistComponent,
    MukhyamantriProfileComponent,
    RajyapalProfileComponent,
    FacilitiesComponent,
    KaryaPramarshDatryComponent,
    ShikshaKaVyavsaikaranComponent,
    DaiveeyApdaJanchComponent,
    AcharSanhitaComponent,
    NeeyamPureekshanComponent,
    VisheshadhikarComponent,
    YachikaComponent,
    AshwashanComponent,
    VitteeyAvmPrashaskeeyVilambComponent,
    PrashnAvmSandarbhComponent,
    SansadeeyAvmSamajikSadbhavComponent,
    VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent,
    VikasPradhikaranComponent,
    PradesheeyVidyutVyawasthaSambandhiJanchComponent,
    ViniyamanSamikshaComponent,
    KhadyaPadarthoMeMilawatComponent,
    SansadeeyAdhyayanComponent,
    VidhaiSamadhikarComponent,
    Album1Component,
    Album2Component,
    Album3Component,
    Album4Component,
    Album5Component,
    Album6Component,
    Album7Component,
    Album8Component,
    Album9Component,
    Album10Component,
    Album11Component,
    Album12Component,
    Album13Component,
    OfficersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
