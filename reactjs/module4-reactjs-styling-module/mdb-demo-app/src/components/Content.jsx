import React from 'react'
import { MDBContainer,MDBRow,MDBBtn,MDBCard,MDBCardHeader,MDBCardBody} from 'mdb-react-ui-kit'
export default function Content() {
  return (
    <div>
     {/* slider carsels */}

     <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://helloyubo.com/wp-content/uploads/2022/10/creative_fashion-2-1024x372.jpg" className="d-block w-100" alt="..." style={{width:"100%",height:"450px"}} />
    </div>
    <div className="carousel-item">
      <img src="https://4.imimg.com/data4/TX/JE/GLADMIN-30141012/wp-content-uploads-2016-05-indiabbazaar-e-commerce.jpg" className="d-block w-100" alt="..." style={{width:"100%",height:"450px"}} />
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" className="d-block w-100" alt="..."  style={{width:"100%",height:"450px"}}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        
        <MDBContainer className='mt-5 shadow mx-auto p-5'>
        <h1 className='text-dark fs-3'>Hurry Up a big discount is running</h1>
        <hr className='border border-1 border-dark w-25' /> 
          
          <MDBRow>
            <div className='col-md-4'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard>
                    <MDBCardHeader className='bg-dark text-white'>Womens items<MDBBtn className='btn btn-sm btn-primary text-white float-end'>View More</MDBBtn></MDBCardHeader>
                    <MDBCardBody>
                        <p className='text-center'><img src='https://www.bonjourretail.com/cdn/shop/products/6_02726dbd-2a0b-4c44-a93b-b9edbf7ddd1d_1024x1024.jpg?v=1664353658' alt='prod' className='img-fluid w-75' /></p>
                        <p className='text-center'><b>Sports T-shirt</b></p>
                        <p className='text-center'><b>Rs.</b>275-/</p>
                        <p className='text-center'><MDBBtn>AddToCart</MDBBtn></p>
                        
                    </MDBCardBody>
                </MDBCard>
            </div>
          </MDBRow>

       
        </MDBContainer>
    
    </div>
  )
}
