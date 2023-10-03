// PropertyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail({ properties }) {
  const { id } = useParams();
  const property = properties.find((p) => p.hotel_id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-detail">
     <div className=' col-4 d-flex justify-content-center'>
          {/* <Link to={`/property/${property.hotel_id}`} style={{textDecoration:'none'}}> */}
          <div class="card mb-3" style={{ width: 20 + 'rem', height: 25 + 'rem' }}>

            <img src={property.photo1} class="card-img-top" style={{ height: 13 + 'rem', padding: 10 + 'px', borderRadius: 10 + 'px' }} alt="..." />
                <div className='col-6 mx-2' style={{ fontSize: '10px', fontWeight: 'bold' }}><i class="fa-solid fa-location-dot mx-2" style={{color:'#d6cab2'}}></i> 5589 , Berlin Street</div>
            <div class="card-body">
              <div className='d-flex justify-content-between'>
                <h5 class="card-title mb-4 col-12" style={{ fontWeight: 'bold', fontSize: 15 + 'px' }}>{property.hotel_name}</h5>
              </div>

              <div className='d-flex mb-4' style={{ borderBottom: 1 + 'px solid #e8e5e5' }}>
                <div className='col-6'>
                  <i class="fa-regular fa-user" style={{ color: '#3437db', fontSize: 12 + 'px' }}></i> <span style={{ fontSize: 12 + 'px' }}>3 room</span><br />
                  <i class="fa-solid fa-gas-pump" style={{ color: '#3437db', fontSize: 12 + 'px' }}></i>   <span style={{ fontSize: 12 + 'px' }}>4 bed</span>
                </div>
                <div className='col-6'>
                  <i class="fa-solid fa-gauge" style={{ color: '#3437db', fontSize: 12 + 'px' }}></i>  <span style={{ fontSize: 12 + 'px' }}>1 bath</span> <br />
                  <i class="fa-solid fa-gears" style={{ color: '#3437db', fontSize: 12 + 'px' }}></i>  <span style={{ fontSize: 12 + 'px' }}>732 sft</span>
                </div>

              </div>
              <div className='d-flex align-items-center'>
                <div className='col-6'>
                 <span style={{color:'#3437db'}}>$7740</span> <span style={{ fontSize: 10 + 'px' }}>/month</span>
                </div>
                <div className='col-6'>

                  <a href="#" class="btn btn-primary mx-3" style={{ backgroundColor: '#d0dff4' }}><i class="fa-regular fa-heart" style={{ color: '#3437db' }}></i></a>
                  <a href="#" class="btn btn-primary" style={{ backgroundColor: '#3437db' }}>Read More</a>
                </div>
              </div>

            </div>
          </div>
      {/* </Link> */}
        </div>
    </div>
  );
}

export default PropertyDetail;
