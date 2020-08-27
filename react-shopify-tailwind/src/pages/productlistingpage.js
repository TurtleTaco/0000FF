import React, { useState, Component } from 'react';
import ProductListingCard from '../components/ProductListingCard';
import DropdownItem from '../components/DropdownItem';
import Header from '../components/Header';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styles from '../components/Dropdown.module.css';
import Client from 'shopify-buy';

function ProductListing({decodedProducts, time1, time2, time3, time4}){
    const [isFilterOpened, setFilterOpenStatus] = useState(false);
    const [isSortOpened, setSortOpenStatus] = useState(false);

    let productObjects = JSON.parse(decodedProducts)

    var sortDropdownWidthMediunScreen = "w-2/12";
    var filterDropdownWidthMediunScreen = "w-2/12";
    var navigationWidthMediunScreen = "w-8/12";

    var sortDropdownWidthSmallScreen = "w-4/12";
    var navigationWidthSmallScreen = "w-4/12";
    var products = [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
    ];

    let sortOptions = [ <DropdownItem title="Price" />,
    <DropdownItem title="Name" />,
    <DropdownItem title="Release Time" />];

    let filterOptions = [ <DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,<DropdownItem title="a" />,
    <DropdownItem title="a" />,
    <DropdownItem title="a" />,<DropdownItem title="a" />,
    <DropdownItem title="a" />];


    let displayProducts = productObjects.map((product) => {
        return (
            <div className="w-full px-1 inline-block md:w-1/3">
                <ProductListingCard imageUrl = {product.images[0].src} />
            </div>
        );
    });

    let HandleFilterHoverEventChange = () => {
        setFilterOpenStatus(!isFilterOpened);
        setSortOpenStatus(false);
    }

    let HandleSortHoverEventChange = () => {
        setFilterOpenStatus(false);
        setSortOpenStatus(!isSortOpened);
    }

    let HandleNavigationMouseLeaveEventChange = () => {
        setFilterOpenStatus(false);
        setSortOpenStatus(false);
    }

    const client = Client.buildClient({
        storefrontAccessToken: '7301dedacfd3710acf80b7325d95a259',
        domain: 'richmofo.myshopify.com'
      });

    return (
    <div className='absolute w-full'>
                
    <Header />

    <div className="mx-3"
        onMouseLeave={HandleNavigationMouseLeaveEventChange}>

        <div className={`${navigationWidthSmallScreen} md:${navigationWidthMediunScreen} inline-block pl-6 text-left text-xs FrontPageShopButtonFont`}>
            
            All <ArrowRightIcon style = {{marginBottom : `2px`}}/>
        </div>
        
        <div className={`${navigationWidthSmallScreen} md:${filterDropdownWidthMediunScreen} inline-block`}
            onMouseEnter={HandleFilterHoverEventChange}
            >
            <div
                className={`underline text-center text-xs FrontPageShopButtonFont my-2`}
                style={{
                    borderRight: `1px solid #a0acc0`,
                    borderLeft: `1px solid #a0acc0`
                }}>
                Filter <ArrowDropDownIcon/>
            </div>

            <div className={`hidden relative md:block md:w-full ${filterDropdownWidthMediunScreen}`}
                onMouseLeave={HandleFilterHoverEventChange}>
                <div className={"absolute z-10 w-full ".concat(isFilterOpened ? styles.dropdownOpened : styles.dropdownClosed)}>
                    <ul>
                        {filterOptions}
                    </ul>
                </div>
            </div>

        </div>

        <div className={`${sortDropdownWidthSmallScreen} md:${sortDropdownWidthMediunScreen} inline-block`}
            onMouseEnter={HandleSortHoverEventChange}
            >

            <div className={`w-full inline-block text-center text-xs FrontPageShopButtonFont my-2`}
                style={{ borderRight: `1px solid #e2e8f0`,}}>

                Sort by : Name <ArrowDropDownIcon/>
            </div>

            <div className={`hidden relative md:block md:w-full ${sortDropdownWidthMediunScreen}`}
                onMouseLeave={HandleSortHoverEventChange}>
                <div className={"absolute z-10 w-full ".concat(isSortOpened ? styles.dropdownOpened : styles.dropdownClosed)}>
                    <ul>
                        {sortOptions}
                    </ul>
                </div>
            </div>

        </div>
    </div>

    
    <div className="w-screen md:hidden">

        <div className={"z-10 w-full bg-black ".concat(
            isFilterOpened ? "absolute" : "hidden")}
            onMouseLeave={HandleFilterHoverEventChange}>

            <div className="flex flex-col">
                <ul>
                    {filterOptions}
                </ul>
            </div>
        </div>

        <div className={"z-10 w-full bg-black ".concat(
            isSortOpened ? "absolute" : "hidden")}
            onMouseLeave={HandleSortHoverEventChange}>

                <div className="flex flex-col">
                    <ul>
                    {sortOptions}
                    </ul>
                </div>
        </div>

    </div>

    <div className="mx-1">
        {displayProducts}
    </div>

    </div>)
}

export async function getStaticProps() {

    var time1 = JSON.stringify(new Date());
    const client = Client.buildClient({
        storefrontAccessToken: '7301dedacfd3710acf80b7325d95a259',
        domain: 'richmofo.myshopify.com'
      });

    var mproducts;
    var callback = (res) => {
        mproducts = res;
    }

    var time2 = JSON.stringify(new Date());
    await client.product.fetchAll().then(callback);
    var decodedProducts = "hahah"
    var decodedProducts = JSON.stringify(mproducts)
    var time3 = JSON.stringify(new Date());
    //let id = params ? params.id : "woman"
    // Pass post data to the page via props
    var time4 = "aa";
    return { props: { decodedProducts, time1, time2, time3, time4} }
  }

export default ProductListing;
