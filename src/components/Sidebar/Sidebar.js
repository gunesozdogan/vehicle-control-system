import React from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
    showAddSection,
    showSearchSection,
    resetSearchedVehicles,
    resetEditedVehicle,
    resetAddedVehicles,
} from "../../actions";
import {
    updateBrandInput,
    updatePlateInput,
    updateModelInput,
} from "../../actions";

export default function Sidebar(props) {
    const dispatch = useDispatch();
    const isSearchShown = useSelector(state => state.isShown.search);

    // Displays add vehicle section and resets searched and edited vehicles in store
    const displayAddVehicleSection = () => {
        dispatch(showAddSection());
        dispatch(resetSearchedVehicles());
        dispatch(resetEditedVehicle());
        // resets search inputs
        dispatch(updateBrandInput());
        dispatch(updatePlateInput());
        dispatch(updateModelInput());
    };

    // Displays search vehicle section and resets added and edited vehicles in store
    const displaySearchVehicleSection = () => {
        dispatch(showSearchSection());
        dispatch(resetAddedVehicles());
        dispatch(resetEditedVehicle());
    };

    return (
        <div className="navbar">
            <div className="nav-search nav-section">
                <button
                    onClick={displaySearchVehicleSection}
                    className={
                        isSearchShown
                            ? "nav-search-btn nav-btn selected"
                            : "nav-search-btn nav-btn"
                    }
                >
                    <svg
                        className="nav-search-icon"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title />
                        <g id="search">
                            <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                        </g>
                    </svg>
                    Search/Edit Vehicle
                </button>
            </div>
            <div className="nav-add nav-section">
                <button
                    onClick={displayAddVehicleSection}
                    className={
                        isSearchShown
                            ? "nav-add-btn nav-btn"
                            : "nav-add-btn nav-btn selected"
                    }
                >
                    <svg
                        className="nav-add-icon"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
                        </g>
                    </svg>
                    Add Vehicle
                </button>
            </div>
        </div>
    );
}
