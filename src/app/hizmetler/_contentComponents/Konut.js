import React from 'react';
import Image from 'next/image'

const Konut = ({service}) => {
    return (
        <div className="row">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src="/images/services/konut.png"
                        alt="konut hizmeti 1"
                        width={410}
                        height={273}
                        className="full-width rounded-border"
                    />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src="/images/services/konut.png"
                        alt="konut hizmeti 1"
                        width={410}
                        height={273}
                        className="full-width rounded-border"
                    />
                </div>
            </div>
            <div className="heading-sm">
                <h4>Sustainable Construction</h4>
            </div>
            <div className="text-content">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don&apost
                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                    need to be sure there isn&apost anything embarrassing hidden in the middle of text.
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don&apost
                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                    need to be sure there isn&apost anything embarrassing hidden in the middle of text.</p>
            </div>

            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="heading-sm">
                        <h4>Construction Features</h4>
                    </div>
                    <ul className="primary-list">
                        <li><i className="fa fa-check-square-o"></i> Providing all materials, labor,
                            equipment and services.
                        </li>
                        <li><i className="fa fa-check-square-o"></i> Contractor Insurance</li>
                        <li><i className="fa fa-check-square-o"></i> Performance Security</li>
                        <li><i className="fa fa-check-square-o"></i> Providing all materials, labor,
                            equipment and services.
                        </li>
                        <li><i className="fa fa-check-square-o"></i> Contractor Insurance</li>
                        <li><i className="fa fa-check-square-o"></i> Performance Security</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Konut;