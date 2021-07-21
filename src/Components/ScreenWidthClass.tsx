import React, { Component } from "react";
import { ScreenWidthFunc } from "./ScreenWidthFunc";

export default class ScreenWidthClass extends Component{
    public render(){
        return (
            <React.Fragment>
                <ScreenWidthFunc>
                    {
                        (width)=> <p style={{ fontSize: '48px' }}>width: {width}</p>
                    }
                </ScreenWidthFunc>
            </React.Fragment>
        )
    }
}