<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aplicaciones en sistemas mecánicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/49.svg")
            .col-lg
              p.mb-0 En esta sección, aplicará los principios del momento lineal y rotacional a sistemas mecánicos reales. Comenzará por analizar el funcionamiento de poleas y engranajes en movimiento rotacional, y cómo la relación de transmisión y las fuerzas involucradas afectan a la dinámica del sistema. Luego, estudiará el control de vibraciones en sistemas mecánicos, y cómo la aplicación de los conceptos de masa, rigidez y amortiguamiento, permite mitigar los efectos negativos de las vibraciones. 

        p(data-aos="fade-down") A continuación, explorará los mecanismos de transmisión de potencia, como correas, cadenas, engranajes y tornillos sin fin, y aprenderá a seleccionar y diseñar estos componentes considerando los requisitos de par, velocidad y eficiencia. 

        p(data-aos="fade-down") Además, descubrirá cómo la conservación del momento angular se aplica en sistemas como giroscopios, volantes de inercia y satélites, y cómo esta ley fundamental permite analizar y predecir el comportamiento de estos dispositivos. Por último, aprenderá sobre la optimización de maquinaria industrial considerando la dinámica rotacional, y cómo la selección adecuada de materiales, geometrías y sistemas de control puede mejorar el rendimiento y la vida útil de los equipos.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/50.png", data-aos="zoom-in")

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Análisis de poleas y engranajes en movimiento rotacional

    p(data-aos="fade-down") El estudio de poleas y engranajes en sistemas rotacionales, es esencial para comprender y optimizar la transmisión de potencia en equipos mecánicos.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/29.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis de poleas y engranajes en movimiento rotacional 
            p.mb-4(data-aos="fade-right") En el PDF Análisis de poleas y engranajes en movimiento rotacional, se abordan los principios fundamentales de estos mecanismos, su relación con la velocidad angular, el par transmitido y el momento de inercia, así como sus implicaciones en la eficiencia y estabilidad de los sistemas. Además, se presenta un ejercicio práctico que ilustra la aplicación de estos conceptos en el cálculo de variables claves para el diseño de transmisiones industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de poleas y engranajes en movimiento rotacional 

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Control de vibraciones en sistemas mecánicos  

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") El control de vibraciones es un aspecto crítico en el diseño y funcionamiento de sistemas mecánicos, dado que las vibraciones excesivas pueden provocar fatiga, desgaste prematuro, ruido y fallas en los componentes. Las vibraciones surgen debido a desequilibrios, desalineaciones, holguras, fuerzas dinámicas y resonancias en el sistema (Pérez Oviedo, 2023).
             
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/51.svg")
            .col-lg
              p.mb-0 El análisis dinámico de vibraciones se basa en la modelización del sistema como un conjunto de masas, resortes y amortiguadores. Las masas representan los componentes con inercia, los resortes representan la rigidez de los elementos elásticos y los amortiguadores representan la disipación de energía. A partir de estos modelos, se pueden obtener las ecuaciones de movimiento y determinar las frecuencias naturales y los modos de vibración del sistema (Lifante et al., 2015). 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/52.png", data-aos="zoom-in")   

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/53.png", data-aos="zoom-in")                        

      .col-lg-8
        p(data-aos="fade-down") Una de las estrategias para controlar las vibraciones es evitar la resonancia, que ocurre cuando la frecuencia de excitación coincide con una de las frecuencias naturales del sistema. En esta condición, la amplitud de las vibraciones aumenta significativamente y puede provocar daños en los componentes. Para evitar la resonancia, se pueden modificar las masas, rigideces o amortiguamientos del sistema para alejar las frecuencias naturales de las frecuencias de excitación esperadas (Irodov, 2010).
             
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            p.mb-0 Otra estrategia es el aislamiento de vibraciones, que consiste en interponer elementos flexibles (aisladores) entre la fuente de vibraciones y el resto del sistema. Los aisladores reducen la transmisión de fuerzas y movimientos vibratorios, protegiendo los componentes sensibles. Ejemplos de aisladores incluyen resortes, soportes elastoméricos, amortiguadores viscosos y sistemas neumáticos (Bujovtsev, 2010).

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicio resuelto 3
            p.mb-4(data-aos="fade-right") En el PDF Ejercicio resuelto 3, se presenta un caso práctico sobre el análisis de vibraciones en una máquina montada sobre aisladores, aplicando conceptos como rigidez, amortiguamiento, frecuencia natural y respuesta en régimen estacionario. Este ejemplo permite comprender cómo calcular la amplitud de las vibraciones y evaluar la eficiencia de un sistema de aislamiento vibratorio, en contextos industriales reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicio resuelto 3   
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/54.png', alt='')                        

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Estudio de mecanismos de transmisión de potencia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/55.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente pódcast.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Estudio de mecanismos de transmisión de potencia"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio resuelto

          p Se desea diseñar un reductor de velocidad para adaptar un motor eléctrico de 1500 rpm a una carga que requiere una velocidad de 60 rpm. Si la potencia del motor es de 5 kW y se desea utilizar engranajes de dientes rectos con un ángulo de presión de 20°, calcular el número de dientes y el diámetro primitivo de los engranajes, asumiendo un módulo de 3 mm.
          h5 Solución
          h5 Datos:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Velocidad del motor:] n1 = 1500 rpm
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Velocidad de la carga:] n2 = 60 rpm
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Potencia del motor:] P = 5 kW
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Ángulo de presión:] θ = 20^º
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Módulo:] m = 3 mm 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/56.png", data-aos="zoom-in")                  

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", alt="")         
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Calcular la relación de transmisión.  
            figure
              img.img-t(src="@/assets/curso/temas/59.svg")

          .div(titulo="Paso 2")
            p Seleccionar el número de dientes del engranaje conducido (z2). 

            p Para evitar interferencia, se recomienda un mínimo de 17 dientes para engranajes de dientes rectos, con ángulo de presión de 20°. Seleccionamos un número de dientes que sea divisible por la relación de transmisión: 

          .div(titulo="Paso 3")
            p Calcular el número de dientes del engranaje conductor (z1). 
            figure
              img.img-t(src="@/assets/curso/temas/60.svg")

          .div(titulo="Paso 4")
            p Calcular los diámetros primitivos de los engranajes. 

            h5 Para el engranaje del conductor:
            p d1 = m • z1 = 3 • 2 = 6 mm
            h5 Para el engranaje conducido:
            p d2 = m • z2 = 3 • 2 = 6 mm

          .div(titulo="Paso 5")
            p Verificar la relación de transmisión real.  
            figure
              img.img-t(src="@/assets/curso/temas/61.svg") 
            p La relación de transmisión real, coincide con la requerida, por lo que el diseño es válido.
          .div(titulo="Resultado")
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Engranaje conductor: 2 dientes, diámetro primitivo de 6 mm.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Engranaje conducido: 50 dientes, diámetro primitivo de 150 mm.           
            p Este ejercicio ilustra el proceso de diseño básico de un tren de engranajes de reducción. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") En la práctica, se deben considerar otros factores, como las fuerzas transmitidas, la resistencia de los dientes, la lubricación y la selección de materiales adecuados. Además, se pueden utilizar trenes de engranajes compuestos (con más de dos engranajes) para obtener relaciones de transmisión más altas en un espacio más compacto.
             
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            p.mb-0 El estudio de los mecanismos de transmisión de potencia, es esencial para los ingenieros industriales, dado que les permite diseñar y optimizar sistemas mecánicos eficientes y confiables. Desde la selección del tipo de transmisión, hasta el cálculo detallado de los componentes, este conocimiento es fundamental para el desarrollo de máquinas y equipos en diversos sectores industriales.              

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/58.png", data-aos="zoom-in")   

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Aplicación de la conservación del momento angular

    p(data-aos="fade-down") La conservación del momento angular es un principio esencial en la física aplicada, especialmente en el análisis de sistemas rotacionales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/62.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Aplicación de la conservación del momento angular 
            p.mb-4(data-aos="fade-right") En el PDF Aplicación de la conservación del momento angular, se explora cómo este principio permite comprender el comportamiento de dispositivos como giroscopios, volantes de inercia y satélites en rotación, incluso ante cambios en su orientación. A través de un caso práctico, se ilustra cómo se mantiene constante el momento angular en ausencia de momentos externos, lo que permite analizar y predecir la respuesta de sistemas mecánicos complejos, ante reorientaciones o variaciones de carga.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>Aplicación de la conservación del momento angular               

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Optimización de maquinaria industrial considerando la dinámica rotacional

    p(data-aos="fade-down") La dinámica rotacional desempeña un papel clave en el rendimiento y la durabilidad de equipos industriales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center       
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Optimización de maquinaria industrial considerando la dinámica rotacional 
            p.mb-4(data-aos="fade-right") En el PDF Optimización de maquinaria industrial considerando la dinámica rotacional, se analizan estrategias para mejorar el diseño, el balanceo y la transmisión de potencia en componentes rotativos, reduciendo vibraciones y aumentando la eficiencia. Este enfoque integral permite, a los ingenieros industriales, optimizar la maquinaria mediante herramientas avanzadas de simulación, seleccionando materiales y configuraciones que aseguren estabilidad, precisión y menor desgaste en los sistemas mecánicos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_11.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>Optimización de maquinaria industrial considerando la dinámica rotacional
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/63.png', alt='') 

    p(data-aos="fade-down") A modo de ejemplo, considere el caso de una máquina herramienta CNC de alta velocidad. La optimización de este tipo de maquinaria, desde la perspectiva de la dinámica rotacional, podría incluir las siguientes medidas: 

    .bg-full-width-1.bg-fondo-1(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/65.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Husillos y rodamientos 
                p Selección de husillos y rodamientos de alta precisión y rigidez para minimizar las vibraciones y el error de posicionamiento.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/66.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Estructuras de soporte y bancadas 
                p Diseño de estructuras de soporte y bancadas con alta amortiguación y baja susceptibilidad a resonancias, para mejorar la estabilidad dinámica.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/67.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Accionamiento y control 
                p Implementación de sistemas de accionamiento y control con alta respuesta dinámica y capacidad de compensación de perturbaciones, para mantener la precisión y la velocidad de mecanizado.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/68.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Parámetros de corte 
                p Optimización de las trayectorias de herramienta y los parámetros de corte, considerando las características dinámicas de la máquina y el proceso de mecanizado.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/69.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Vibración, desgaste o desalineación 
                p Uso de sistemas de monitoreo y diagnóstico en tiempo real, para detectar y corregir problemas de vibración, desgaste o desalineación, antes que afecten la calidad del producto final. 

        p(data-aos="fade-down") La implementación de estas medidas de optimización, requiere un conocimiento profundo de los principios de la dinámica rotacional, así como habilidades en diseño mecánico, control y automatización. Los ingenieros industriales deben trabajar en estrecha colaboración con otros profesionales, como ingenieros mecánicos, eléctricos y de control, para desarrollar soluciones integrales que mejoren el rendimiento y la eficiencia de la maquinaria industrial.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio resuelto

          p Una máquina de envasado tiene un eje rotativo acoplado a un motor eléctrico mediante un acoplamiento flexible. El eje tiene una masa de 20 kg y una longitud de 1 m. Durante la operación, se detectan vibraciones excesivas a una velocidad de 1800 rpm. Se sospecha que el problema está relacionado con el desequilibrio del eje. Si se permite un desequilibrio residual máximo de 100 g·mm, calcular la masa de balanceo necesaria y su ubicación en el eje para corregir el problema.
          h5 Solución
          h5 Datos:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Masa del eje: m = 20 kg
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Longitud del eje: L = 1 m
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Velocidad de operación: n =1800 rpm =  
              img.img-t(src='@/assets/curso/temas/73.svg', alt='')                        

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Desequilibrio residual máximo permitido: U#[sub max] = 100g.mm = 0.0001 kg.mm
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/70.png", data-aos="zoom-in") 


    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/71.png", alt="")         
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Calcular el desequilibrio inicial del eje. Asumiendo que el desequilibrio se debe a una masa puntual md a una distancia rd del eje de rotación:
            p U#[sub 0]=1000 g.mm = 0.001 kg.m
            p Como no se conocen los valores de m#[sub d] y r#[sub d], se asumirá un valor de desequilibrio inicial U#[sub 0] mayor que el máximo permitido. Por ejemplo, 
            p U0 = 1000 g·mm = 0,001 kg·m.                        
          .div(titulo="Paso 2")
            p Calcular la fuerza centrífuga generada por el desequilibrio inicial a la velocidad de operación. 
            p F#[sub 0] = U#[sub 0] • ω#[sup 2] = 0.001 • (1.885)#[sup 2] = 35.52 N 
          .div(titulo="Paso 3")
            p Desequilibrio permitido → Fuerza tolerable.
            p F#[sub max]= U#[sub max] • ω#[sup 2] = 0.0001 • (1.885)#[sup 2] = 3.552 N 
    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA(tipo="b")            
          .div(titulo="Paso 4")
            p Calcular la masa de balanceo necesaria para reducir el desequilibrio al valor máximo permitido. 
            p La masa de balanceo #[b m#[sub b]] debe generar una fuerza centrífuga igual y opuesta a la fuerza de desequilibrio inicial, menos la fuerza de desequilibrio residual permitida: 
            p F#[sub 0] = F#[sub 0] - F#[sub max] = 35.52 N - 3.552 = 31.97 N
            Asumiendo que la masa de balanceo se ubica a:
            p r#[sub b]=0.05 m
            h5 Usamos:
            p F#[sub b] = m#[sub b] •r#[sub b] • ω#[sup 2]
            h5 Usamos:
            img.img-t(src='@/assets/curso/temas/74.svg', alt='')                        

          .div(titulo="Resultado")
            p Para reducir el desequilibrio del eje al valor máximo permitido de 100 g·mm, se debe colocar una masa de balanceo de 18 g a una distancia de 0,05 m del eje de rotación, en el plano de desequilibrio y en oposición a la masa de desequilibrio inicial. 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/72.png", alt="") 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/75.png", data-aos="zoom-in")       
      .col-lg-8
        p(data-aos="fade-down") Este ejemplo ilustra cómo la aplicación de los principios de la dinámica rotacional puede ayudar a identificar y corregir problemas de desequilibrio en maquinaria industrial. El balanceo de ejes y rotores es una técnica fundamental para reducir vibraciones, cargas dinámicas y desgaste prematuro en equipos rotativos.
             
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            p.mb-0 La optimización de la maquinaria industrial, considerando la dinámica rotacional, es un proceso continuo que involucra el diseño, la operación y el mantenimiento de los equipos. Los ingenieros industriales deben estar familiarizados con los conceptos y herramientas de la dinámica rotacional para tomar decisiones informadas que mejoren el rendimiento, la eficiencia y la vida útil de la maquinaria. 

    h3(data-aos="fade-down") Consideraciones finales
    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") A través de este texto, se ha explorado la importancia del #[b momento lineal] y rotacional en el análisis y diseño de sistemas mecánicos en la ingeniería industrial, abordando los principios fundamentales del momento lineal, su conservación y su relación con el impulso y el cambio de momento. Además, se ha analizado el concepto de #[b momento de inercia] y su impacto en el diseño mecánico, considerando la relación entre masa, geometría y distribución de masa.
             
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/76.svg")
            .col-lg
              p.mb-0 Se han aplicado estos conceptos a diversos sistemas mecánicos, como poleas y engranajes, y hemos estudiado estrategias para el control de vibraciones y la transmisión de potencia. La conservación del momento angular ha demostrado ser un principio fundamental para comprender el comportamiento de sistemas rotativos, desde giroscopios hasta volantes de inercia.

        p(data-aos="fade-down") Finalmente, se ha abordado la optimización de la maquinaria industrial desde la perspectiva de la dinámica rotacional, destacando la importancia de considerar las cargas dinámicas, las vibraciones y la fatiga en el diseño y selección de componentes. La optimización integral de la maquinaria, requiere un enfoque multidisciplinario que involucre a profesionales de diversas áreas de la ingeniería.              

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/77.png", data-aos="zoom-in")  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/78.png", data-aos="zoom-in")                        

      .col-lg-8
        p(data-aos="fade-down") Se han ilustrado cómo los principios del #[b momento lineal y rotacional] se aplican en situaciones reales de la ingeniería industrial. Estos ejemplos demuestran la importancia de un sólido conocimiento teórico combinado con habilidades prácticas de cálculo y diseño.
             
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            p.mb-0 Para los estudiantes de ingeniería industrial, el dominio de estos conceptos es esencial para enfrentar los desafíos del diseño, análisis y optimización de sistemas mecánicos. La comprensión profunda de la dinámica rotacional les permitirá tomar decisiones informadas que conduzcan a mejoras en la eficiencia, la productividad y la calidad de los procesos industriales. 
        p(data-aos="fade-down") En conclusión, el estudio del momento lineal y rotacional en la ingeniería industrial, es fundamental para el desarrollo de sistemas mecánicos eficientes, seguros y duraderos. Los ingenieros industriales deben continuar explorando y aplicando estos principios, adaptándose a las nuevas tecnologías y desafíos que surgen en un entorno industrial en constante evolución. Solo a través de un enfoque riguroso y multidisciplinario podrán diseñar y optimizar maquinaria y procesos que impulsen el progreso y la innovación en la industria.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1" target="_blank" rel="noopener noreferrer") Bujovtsev, B. B. (2010). Problemas seleccionados de la física elemental. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1" target="_blank" rel="noopener noreferrer") Irodov, I. E. (2010). Problemas de física general. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1" target="_blank" rel="noopener noreferrer") Lifante, G. Bravo, D. & Jaque, D. (2015). Problemas resueltos de fundamentos de física (I). Editorial Universidad Autónoma de Madrid.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1" target="_blank" rel="noopener noreferrer") Pérez Oviedo, W. (2023). De Newton a Nash: la influencia de la física y la matemática en la economía. FLACSO.                                       

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html " target="_blank" rel="noopener noreferrer") HyperPhysics. (s.f.). Moment of Inertia. Georgia State University. 
            p Una página didáctica que explora el momento de inercia con diagramas y fórmulas, incluyendo su aplicación en sistemas mecánicos. 
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bennett.edu.in/media-center/blog/applications-of-mechanical-engineering-in-our-daily-lives-with-examples/" target="_blank" rel="noopener noreferrer") Bennett University. (2024). Applications of Mechanical Engineering in Our Daily Lives with Examples.  
            p Muestra cómo los principios de la mecánica (incluyendo momento, fuerza y diseño) se aplican en electrodomésticos, vehículos y maquinaria.   
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.guvi.in/blog/real-world-applications-of-mechanical-engineering/" target="_blank" rel="noopener noreferrer") GUVI. (2025). 9 Impressive Real-world Applications of Mechanical Engineering. 
            p Artículo que ilustra aplicaciones prácticas de la ingeniería mecánica, como sistemas de transmisión, diseño de motores y automatización.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/wyOJdC_x-zE" target="_blank" rel="noopener noreferrer") Prof. Oscar Gonzalez Rodriguez. (2020). Curso de Diseño de Máquinas. Presión mínima en montajes eje-cubo mediante ajustes prensados.

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.autodesk.com/products/fusion-360" target="_blank" rel="noopener noreferrer") Fusion 360. (2023). Autodesk Fusion 360 - Dynamic Simulation [Software CAD/CAE]. Autodesk Inc. 
            p #[b Descripción.] #[i Software] de modelado y simulación mecánica que permite evaluar dinámicamente sistemas mecánicos en diseño de productos. 
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.freecadweb.org" target="_blank" rel="noopener noreferrer") FreeCAD. (2023). FreeCAD Motion Analysis [Software Open Source]. FreeCAD Community. 
            p #[b Descripción.] Herramienta de código abierto utilizada en el diseño mecánico para analizar el comportamiento de sistemas mecánicos con base en el momento de inercia.               

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Física I',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Un patinador sobre hielo lanza una bola hacia adelante mientras está en reposo. ¿Qué sucede con su movimiento después de lanzar la bola?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Permanece en reposo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se mueve en la misma dirección que la bola.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se mueve en dirección opuesta a la bola. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Su velocidad aumenta en la misma dirección de la bola.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué factor NO afecta el momento de inercia de un cuerpo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La distribución de la masa respecto al eje de rotación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La forma geométrica del cuerpo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La velocidad angular del cuerpo.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La masa del cuerpo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Un disco y un aro de la misma masa y radio ruedan por una pendiente. ¿Cuál llega primero al final?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El disco.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'El aro.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ambos llegan al mismo tiempo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Depende de la inclinación de la pendiente.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Si en un sistema de partículas aislado la cantidad de movimiento total es constante, ¿qué principio físico se está cumpliendo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Segunda ley de Newton.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Principio de conservación del momento lineal.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Principio de conservación de la energía.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ley de la gravitación universal.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Por qué en el diseño de maquinaria se buscan volantes de inercia con grandes radios?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Para reducir el peso total de la máquina.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Para aumentar la resistencia al cambio de velocidad de rotación.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Para disminuir la energía cinética almacenada.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Para reducir el consumo de energía del motor.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
