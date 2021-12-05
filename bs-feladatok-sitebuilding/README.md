
## A kész feladat feltöltésének helye:

Repo:  **str2-sajat-munka**

Almappa: **bs-feladatok-sitebuilding**

Például:  **http://github****.com/cherryApp/****str2-sajat-munka/bs-feladatok-sitebuilding**

  

# Bootstrap 4 sitebuilding projekt

**A letölthető fájlok a leírás végén találhatóak. A desktop PDF-fájl fel van címkézve a feladatok szövegével.**

**Készítsd el a  _desktop.jpeg/mobile.jpeg_  képen látható reszponzív honlapot Bootstrap 4 segítségével!**

Összesen 2 nézetünk van. Large breakpoint (992px) felett a desktop, alatta a mobil view érvényesüljön! A dizájnhoz használt képeket megtalálod az  _img_  mappában. Használj egyéni betűtípusokat – Google Fonts-ról le kell tölteni, és CSS-ben egyéni betűtípusokat kell létrehozni az alábbiak szerint:

-   A címsorok és menük betűtípusa: Catamaran, Helvetica, Arial, sans-serif
-   Gombok szövege, felső menü linkek: Lato, Helvetica, Arial, sans-serif
-   Bekezdések: Muli, Helvetica, Arial, sans-serif
-   A footer egységesen: Muli, Helvetica, Arial, sans-serif

A használni kívánt színeket mérd ki! Pontosan meg kell felelni a dizájn színeinek (color picker-t használd)! A margin-, padding-értékeknek, betűméreteknek, sormagasságoknak stb. nem kell pixelpontosnak lennie, de szemre lőjük be, ne térjen el nagyon a dizájnon lévőtől! A feladatok leírását a  _desktop.pdf_  fájl tartalmazza megjegyzések formájában, de itt is olvashatod:

**_Start Bootstrap szöveg (a bal felső sarokban):_**  - Ha fölé visszük a kurzort, fehér lesz a betűszín.

_**Felső navbar:**_

-   Ha a menü item fölé visszük a kurzort, fehér lesz a betűszín.
-   Nem új oldalra vezető linkek, hanem az adott oldalon belüli részhez animálódva le-/felgördül az oldal.
    -   A Download a  _Discover what all the buzz is about!_  részhez
    -   A Feature az  _Unlimited Features Unlimited Fun_  részhez
    -   A Contact a  _We love new friends!_  részhez
-   Ez a gördüléses animáció 300ms időtartamú legyen, ez az az idő, amely alatt felülre kerül az adott tartalmi rész.
-   A felső menü fixen, mindig látható felül. Ha nem az oldal tetején vagyunk, akkor legyen a menü háttérszíne fehér, a betűk szürkék (desktop-menu.pdf szerint).

**_Gombok:_**

-   Lekerekítettek
-   Ha föléjük visszük a kurzort, sárga lesz a háttérszínük és a border színe is (#fdcc52). Ez 300ms alatt történjen meg, ne rögtön (natív CSS-sel oldd meg, ha tudod).

**_Felső rózsaszín-lila rész:_**

-   Ez egy linear gradient plusz egy kép repeatelve
-   A kép a bg-pattern.png

**_Discover what all the buzz is about! rész_**

-   Két kép lesz linkként használva (app-store-badge.svg, google-play-badge.svg)
-   Ezek olyan képlinkek, amelyek az App Store és a Google Play oldalakra vezetnek.

**_Unlimited Features Unlimited Fun rész_**

-   A jobb oldali 4-es csoportnál embed row-t használj
-   Az ikonok sima UTF-8 karakterek, vagy használd a Simple Line Icons készletet

**_Stop Waiting Start Building rész_**

-   A háttéren egy áttetsző „szűrő" van
-   Ha a gomb fölé visszük a kurzort, sárga lesz a háttér színe és a border színe is (#fdcc52)

**_We love new friends! rész_**

-   A social-ikonoknál:
    
    -   A háttérszín 90%-os opacity-jű
    -   Ha fölé viszem a kurzort, akkor lesz 100%-os opacity-jű
    -   Használj Font Awesome-ikonokat
    -   Az ikonok linkek az adott social page-re
    -   Mindegyik ikonnak legyen tooltipje, tehát ha fölé viszem a kurzort, megjelenik az adott social page neve (Facebook, Twitter, Google Plus: a Google+ megszűnt, ehelyett bármely más Google-oldalra vezető link megfelel)

**_Footer_**

-   Sima linkek. Ha föléjük visszük a kurzort, sárga lesz a betűk színe (#fdcc52)
-   Nem új oldalra vezetnek, hanem mindegyik 1-1 külön modalt nyit
-   Tehát 3 modal lesz: egy Terms, egy Privacy és egy FAQ
-   Elég, ha ezeknek a modaloknak a title-je különbözik, a body lehet egy egyszerű lorem ipsum. A modal nyitását jQuery-vel oldjuk meg

**Fájlok:** [bootstrap-sitebuilding-project.zip](https://s3.amazonaws.com/thinkific/file_uploads/219412/attachments/8a4/22d/733/bootstrap-sitebuilding-project.zip)
