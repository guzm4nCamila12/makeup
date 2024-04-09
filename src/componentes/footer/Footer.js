import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start bg-light text-muted">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>MAKEUP CAMILA
                                </h6>
                                <p>
                                    La belleza de un accesorio está en la mujer que lo usa.
                                </p>
                            </div>



                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Productos
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Atenea</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Anika</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Ruby rose</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Muchos más</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Redes sociales
                                </h6>
                                <p>
                                    <FacebookIcon/>
                                    Facebook
                                </p>
                                <p>
                                    <WhatsAppIcon/>
                                    Whatsapp
                                </p>
                                <p>
                                    <TwitterIcon/>
                                    Twitter
                                </p>
                                <p>
                                    <InstagramIcon/>
                                    Instagram
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contactos</h6>
                                <p><i class="fas fa-home me-3"></i> Pereira / Colombia </p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    mariguramos12@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> 3102569854</p>
                                <p><i class="fas fa-print me-3"></i> 3225148962</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div class="text-center p-4" >
                    ¡Los mejores productos para ti!
                </div>

            </footer>
        </div>
    )
}

export default Footer
