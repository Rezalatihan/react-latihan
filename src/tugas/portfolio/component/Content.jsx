import Figure from "react-bootstrap/Figure";

function Content() {
  return (
    // <Figure className="d-flex justify-content-center p-3">
    //   <Figure.Image width={280} height={280} alt="photo reza" src="reza.jpg" class="rounded-circle" />
    //   <Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
    // </Figure>

    <div className="text-center m-3">
      <img src="reza.jpg" alt="photo reza" class="rounded-circle" style={{ width: 280, height: 280 }}></img>
      <h1>REZA CATRIA AKBAR</h1>
      <p class="fs-2 fw-light">
        Hallo saya Reza Catria Akbar, saya tinggal di Jl.H.Katim Meruyung Kel.Meruyung Kec.Limo Kota Depok Jawabarat, Saya lulusan S1 Teknik Mesin Universitas Pamulang tahun 2022. Dan Saat ini saya sedang belajar di EduWork
      </p>
    </div>
  );
}

export default Content;
