import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Productlist = () => {
    return (
        <div className="sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed">
            <Sidebar />
            <div className="sa-app__content">
                <Header />
                <div id="top" className="sa-app__body">
                    <div className="mx-xxl-3 px-4 px-sm-5">
                        <div className="py-5">
                            <div className="row g-4 align-items-center">
                                <div className="col">
                                    <nav className="mb-2" aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-sa-simple">
                                            <li className="breadcrumb-item"><a href="index-2.html">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                                        </ol>
                                    </nav>
                                    <h1 className="h3 m-0">Products</h1>
                                </div>
                                <div className="col-auto d-flex"><a href="#" className="btn btn-secondary me-3">Import</a>
                                <a href="/product/add" className="btn btn-primary">New product</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-xxl-3 px-4 px-sm-5 pb-6">
                        <div className="sa-layout">
                            <div className="sa-layout__backdrop" data-sa-layout-sidebar-close=""></div>
                            <div className="sa-layout__sidebar">
                                <div className="sa-layout__sidebar-header">
                                    <div className="sa-layout__sidebar-title">Filters</div><button type="button"
                                        className="sa-close sa-layout__sidebar-close" aria-label="Close"
                                        data-sa-layout-sidebar-close=""></button>
                                </div>
                                <div className="sa-layout__sidebar-body sa-filters">
                                    <ul className="sa-filters__list">
                                        <li className="sa-filters__item">
                                            <div className="sa-filters__item-title">Price</div>
                                            <div className="sa-filters__item-body">
                                                <div className="sa-filter-range" data-min="0" data-max="2000" data-from="0"
                                                    data-to="2000">
                                                    <div className="sa-filter-range__slider"></div><input type="hidden"
                                                        value="0" className="sa-filter-range__input-from" /><input type="hidden"
                                                            value="2000" className="sa-filter-range__input-to" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sa-filters__item">
                                            <div className="sa-filters__item-title">Categories</div>
                                            <div className="sa-filters__item-body">
                                                <ul className="list-unstyled m-0 mt-n2">
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Power tools</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Hand
                                                        tools</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Machine tools</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Power
                                                        machinery</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Measurement</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="sa-filters__item">
                                            <div className="sa-filters__item-title">Product type</div>
                                            <div className="sa-filters__item-body">
                                                <ul className="list-unstyled m-0 mt-n2">
                                                    <li><label className="d-flex align-items-center pt-2"><input type="radio"
                                                        className="form-check-input m-0 me-3 fs-exact-16"
                                                        name="filter-product_type" />Simple</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="radio"
                                                        className="form-check-input m-0 me-3 fs-exact-16"
                                                        name="filter-product_type" />Variable</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="radio"
                                                        className="form-check-input m-0 me-3 fs-exact-16"
                                                        name="filter-product_type" />Digital</label></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="sa-filters__item">
                                            <div className="sa-filters__item-title">Brands</div>
                                            <div className="sa-filters__item-body">
                                                <ul className="list-unstyled m-0 mt-n2">
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Brandix</label>
                                                    </li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />FastWheels</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />FuelCorp</label></li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />RedGate</label>
                                                    </li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />Specter</label>
                                                    </li>
                                                    <li><label className="d-flex align-items-center pt-2"><input type="checkbox"
                                                        className="form-check-input m-0 me-3 fs-exact-16" />TurboElectric</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sa-layout__content">
                                <div className="card">
                                    <div className="p-4">
                                        <div className="row g-4">
                                            <div className="col-auto sa-layout__filters-button"><button
                                                className="btn btn-sa-muted btn-sa-icon fs-exact-16"
                                                data-sa-layout-sidebar-open=""><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                    <path
                                                        d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2 C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2 C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3 C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z">
                                                    </path>
                                                </svg></button></div>
                                            <div className="col"><input type="text"
                                                placeholder="Start typing to search for products"
                                                className="form-control form-control--search mx-auto" id="table-search" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sa-divider"></div>
                                    <table className="sa-datatables-init" data-order="[[ 1, &quot;asc&quot; ]]"
                                        data-sa-search-input="#table-search">
                                        <thead>
                                            <tr>
                                                <th className="w-min" data-orderable="false"><input type="checkbox"
                                                    className="form-check-input m-0 fs-exact-16 d-block" aria-label="..." />
                                                </th>
                                                <th className="min-w-20x">Product</th>
                                                <th>Category</th>
                                                <th>Stock</th>
                                                <th>Price</th>
                                                <th className="w-min" data-orderable="false"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-1-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Electric Planer
                                                            Brandix KL370090 300 Watts</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">2043</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">KL370090</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Planers</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">25 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">749</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-0"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-0">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-2-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Undefined Tool
                                                            IRadix DPS300SY 2700 Watts</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">1746</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">DPS300SY</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Power Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-danger">Out of Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">1,019</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-1"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-1">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-3-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Drill Screwdriver
                                                            Brandix ALX7054B 200 Watts</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">8821</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">ALX7054B</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Screwdrivers</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">3 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">850</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-2"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-2">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-4-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Drill Series 3
                                                            Brandix KSR4590P 1500 Watts</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">5312</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">KSR4590P</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Drills</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">7 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">949</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-3"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-3">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-5-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix Router
                                                            Power Tool 2017ERX9</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">3326</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">2017ERX9</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Routers</a></td>
                                                <td>
                                                    <div className="badge badge-sa-primary">Preorder</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">1,700</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-4"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-4">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-6-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix Drilling
                                                            Machine DM2019KW 4kW</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">4402</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">DM2019KW</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Drills</a></td>
                                                <td>
                                                    <div className="badge badge-sa-warning">On Backorder</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">3,199</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-5"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-5">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-7-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix
                                                            Pliers</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">9637</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">BDX100PL</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Hand Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">8 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">24</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-6"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-6">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-8-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Water Hose
                                                            40cm</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">2002</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">WATER40C</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Plumbing</a></td>
                                                <td>
                                                    <div className="badge badge-sa-primary">Preorder</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">15</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-7"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-7">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-9-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Spanner
                                                            Wrench</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">4955</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">SP0072WR</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Hand Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">15 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">19</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-8"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-8">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-10-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Water Tap</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">6428</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">TAP883WT</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Plumbing</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">24 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">15</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-9"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-9">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-11-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Hand Tool Kit</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">1302</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">HT75002K</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Hand Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">9 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">149</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-10"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-10">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-12-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Ash&#x27;s
                                                            Chainsaw 3.5kW</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">1022</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">AC6660KW</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Power Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-danger">Out of Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">666</span><span
                                                            className="sa-price__decimal">.99</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-11"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-11">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-13-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix Angle
                                                            Grinder KZX389PQ</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">7203</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">KZX389PQ</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Power Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">2 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">649</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-12"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-12">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-14-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix Air
                                                            Compressor DELTA500</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">4402</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">DELTA500</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Compressors</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">7 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">1,800</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-13"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-13">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-15-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix Electric
                                                            Jigsaw JIG7000B</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">5221</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">JIG7000B</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Power Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">1 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">290</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-14"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-14">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block"
                                                    aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex align-items-center"><a href="app-product.html"
                                                        className="me-4">
                                                        <div
                                                            className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                            <img src="images/products/product-16-40x40.jpg" width="40"
                                                                height="40" alt="" /></div>
                                                    </a>
                                                        <div><a href="app-product.html" className="text-reset">Brandix
                                                            Screwdriver SCREW150</a>
                                                            <div className="sa-meta mt-0">
                                                                <ul className="sa-meta__list">
                                                                    <li className="sa-meta__item">ID: <span
                                                                        title="Click to copy product ID"
                                                                        className="st-copy">7321</span></li>
                                                                    <li className="sa-meta__item">SKU: <span
                                                                        title="Click to copy product SKU"
                                                                        className="st-copy">SCREW150</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="app-category.html" className="text-reset">Power Tools</a></td>
                                                <td>
                                                    <div className="badge badge-sa-success">18 In Stock</div>
                                                </td>
                                                <td>
                                                    <div className="sa-price"><span className="sa-price__symbol">$</span><span
                                                        className="sa-price__integer">1,499</span><span
                                                            className="sa-price__decimal">.00</span></div>
                                                </td>
                                                <td>
                                                    <div className="dropdown"><button className="btn btn-sa-muted btn-sm"
                                                        type="button" id="product-context-menu-15"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        aria-label="More"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="3" height="13" fill="currentColor">
                                                            <path
                                                                d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z">
                                                            </path>
                                                        </svg></button>
                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="product-context-menu-15">
                                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                                            <li><a className="dropdown-item" href="#">Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#">Add tag</a></li>
                                                            <li><a className="dropdown-item" href="#">Remove tag</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item text-danger" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <div className="sa-app__toasts toast-container bottom-0 end-0"></div>
        </div>
    )
}
export default Productlist;