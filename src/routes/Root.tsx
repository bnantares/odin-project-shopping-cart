import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { Flex } from "@mantine/core";

export default function Root() {
    return(
        <>  
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap" 
            >
                <NavLink to={`/`}>
                    Home
                </NavLink>
                <NavLink to={`shop`}>
                    Shop
                </NavLink>
                <NavLink to={`contact-us`}>
                    Contact Us
                </NavLink>
            </Flex>
            <div id="details">
                <Outlet />
            </div>
        </>
    )
}