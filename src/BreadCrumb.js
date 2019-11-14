import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BdCrumb = (props) => {
  return (
    <div>
    
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BdCrumb;