import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
{/* COL 1 */}
      <div className="col">
        <div className="row">
            <Link className="link" to="/products/1">
                <img src="https://images.bewakoof.com/uploads/grid/app/bottom-women-mid-1671791228.jpg" alt="" />
            </Link>
        </div>
        <div className="row">

        <Link className="link" to="/products/1">
            <img src="https://images.bewakoof.com/uploads/grid/app/christmas-clearance-zone-common-1671545680.jpg" alt="" />
        </Link>
    
        </div>
      </div>
{/* COL 2 */}
      <div className="col">
        <div className="row">
        
        <Link className="link" to="/products/1"> 
            <img src="https://images.bewakoof.com/t1080/unisex-black-i-am-complete-the-way-typography-small-bagpack-481827-1655983761-1.jpg" alt="" />
        </Link>
            
        </div>
      </div>
{/* COL 3 */}
      <div className="col col-lg">
        <div className="row">
            <div className="col">
                <div className="row">
    
            <Link className="link" to="/products/1"> 
                <img src="https://images.bewakoof.com/uploads/grid/app/phone-cover-banner-1669297531.jpg" alt="" />
            </Link>
                
                </div>
            </div>
{/* COL 4 */}
            <div className="col">
                <div className="row">
                <Link className="link" to="/products/1">
                    <img src="https://images.bewakoof.com/uploads/grid/app/xmasParty-banner-1x1-xmas-common-1671613537.jpg" alt="" />
                </Link>
                </div>
            </div>
        </div>
        <div className="row">
                
                <Link className="link" to="/products/1">
                     <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-ZigZagSliders-1668416638.jpg" alt="" />
                </Link>
                
        </div>
      </div>
    </div>
  )
}

export default Categories
