import React from 'react';
import {Row, Col} from 'antd';

const CurrentProject = (props) => {
    const usedTech = props.projectData.node.field_used_tech.map(item => <div>{item}</div>);

    return (
        <div>
            <Row>
                <Col span={16}
                     dangerouslySetInnerHTML={{__html: props.projectData.node.field_project_description.value}}/>
                <Col span={8}> {usedTech} </Col>
            </Row>
            <div>Gallery</div>
            {console.log(props)}
        </div>
    );
};

export default CurrentProject;
