import React from "react";
import { Button } from 'reactstrap';

import "./post-status-filter.scss";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button type="button" color="info">Все</Button>
            <Button type="button" outline color="secondary">Понравилось</Button>
        </div>
    )
}

export default PostStatusFilter;