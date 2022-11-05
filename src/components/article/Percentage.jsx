import { Fragment } from "react";

export default function Percentage() {
    return (
        <Fragment>
            <div>
                <div className="mt-2">
                    <h4 className="mb-1">Locally Recommended</h4>
                    <div className="d-flex just-end w-80 bg-purple">
                        <p className="text-white pe-1">80%</p>
                    </div>
                </div>
                <div className="mt-2">
                    <h4 className="mb-1">Project Complete Successfully</h4>
                    <div className="d-flex just-end w-90 bg-purple">
                        <p className="text-white pe-1">90%</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
