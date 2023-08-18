import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BannerContents } from "../component/DummyApi";

const AddBanner = () => {
    return (
        <>
            <section className='banner-area'>
                <div className='container-fluid '>
                    <div className='row'>
                        {BannerContents.map((content) => (
                            <div
                                className='col-lg-4 d-flex justify-content-center align-items-center'
                                key={content.id}
                            >
                                <div className='tpbanner-item mb-2'>
                                    <div className='tpbanner-content'>
                                        <span className='tpbanner-sub-title mb-2'>{content.offers}</span>
                                        <h4 className='tpbanner-title mb-3'>{content.title}</h4>
                                        <button className='shop-btn'>
                                            {content.btn}
                                            <ChevronRightIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddBanner;
