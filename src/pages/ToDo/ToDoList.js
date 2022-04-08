// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { activateAuthLayout } from "../../store/layout/actions";
// import { fetchTodosStart, removeTodoStart } from "../../store/toDo/toDoActions";

// import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
// import { Link, NavLink } from "react-router-dom";

// import DataTable from "react-data-table-component";
// import styled from "styled-components";

// const TextField = styled.input`
//   height: 32px;
//   width: 200px;
//   border-radius: 3px;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
//   border: 1px solid #e5e5e5;
//   padding: 0 32px 0 16px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// const ClearButton = styled(Button)`
//   border-top-left-radius: 0;
//   border-bottom-left-radius: 0;
//   border-top-right-radius: 5px;
//   border-bottom-right-radius: 5px;
//   height: 34px;
//   width: 32px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const FilterComponent = ({ filterText, onFilter, onClear }) => (
//   <>
//     <TextField
//       id="search"
//       type="text"
//       placeholder="Filter By Name"
//       aria-label="Search Input"
//       value={filterText}
//       onChange={onFilter}
//     />
//     <ClearButton type="button" onClick={onClear}>
//       X
//     </ClearButton>
//   </>
// );

// const ToDoList = () => {
//   const dispatch = useDispatch();
//   const { toDoReducer, Layout } = useSelector((state) => state);
//   const [toggledClearRows, setToggledClearRows] = useState(false);

//   const columns = [
//     {
//       name: "Title",
//       selector: "title",
//       sortable: true,
//     },
//     {
//       name: "Year",
//       selector: "body",
//       sortable: true,
//       right: true,
//     },

//     {
//       name: "Acton",
//       cell: (row) => (
//         <div>
//           <div>
//             <Button color="success" onClick={() => console.log(row.id)}>
//               add
//             </Button>
//           </div>
//           {row.summary}
//         </div>
//       ),
//       sortable: true,
//     },
//   ];

//   const [filterText, setFilterText] = React.useState("");

//   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
//     false
//   );

//   const filteredItems = toDoReducer.todos.filter(
//     (item) =>
//       (item.title &&
//         item.title.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.body && item.body.toLowerCase().includes(filterText.toLowerCase()))
//   );

//   const subHeaderComponentMemo = React.useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };

//     return (
//       <FilterComponent
//         onFilter={(e) => setFilterText(e.target.value)}
//         onClear={handleClear}
//         filterText={filterText}
//       />
//     );
//   }, [filterText, resetPaginationToggle]);

//   useEffect(() => {
//     dispatch(activateAuthLayout());
//     dispatch(fetchTodosStart());
//   }, [dispatch]);

//   if (toDoReducer.fetching) return <p>Loading...</p>;
//   if (toDoReducer.error) {
//     return <div style={{ color: "red" }}>ERROR: {toDoReducer.error}</div>;
//   }
//   if (toDoReducer.todos.length === 0) return <div>No posts.</div>;

//   return (
//     <React.Fragment>
//       <Row>
//         <Col lg="12">
//           <Card>
//             <CardBody>
//               <DataTable
//                 title="Contact List"
//                 columns={columns}
//                 data={filteredItems}
//                 //progressPending={loading}
//                 pagination
//                 paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
//                 subHeader
//                 subHeaderComponent={subHeaderComponentMemo}
//                 //selectableRows
//                 persistTableHead
//               />

//               <h4 className="mt-0 header-title">Responsive tables</h4>
//               <p className="text-muted m-b-30">
//                 {" "}
//                 Create responsive tables by wrapping any <code>.table</code>
//                 in <code>.table-responsive</code> to make them scroll
//                 horizontally on small devices (under 768px).
//               </p>
//               <Table responsive className="mb-0">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {toDoReducer.todos.map((singleData, i) => (
//                     <tr key={i}>
//                       <th scope="row">{singleData.id}</th>
//                       <td>Table cell</td>
//                       <td>Table cell</td>
//                       <td>Table cell</td>
//                       <td>Table cell</td>
//                       <td>Table cell</td>

//                       <td>
//                         {toDoReducer.permissions.includes("show") ? (
//                           <NavLink
//                             to={`/dashboard/todo-single/${singleData.id}`}
//                           >
//                             <Button color="success">View</Button>
//                           </NavLink>
//                         ) : null}

//                         {toDoReducer.permissions.includes("edit") ? (
//                           <NavLink to={`/dashboard/todo-edit/${singleData.id}`}>
//                             <Button color="secondary">Edit</Button>
//                           </NavLink>
//                         ) : null}

//                         {toDoReducer.permissions.includes("delete") ? (
//                           <Button
//                             color="danger"
//                             onClick={() => {
//                               if (window.confirm("Are you sure to delete?"))
//                                 dispatch(removeTodoStart(singleData.id));
//                             }}
//                           >
//                             Delete
//                           </Button>
//                         ) : null}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default ToDoList;






import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosStart, removeTodoStart } from "../../store/toDo/toDoActions";
// import { activateAuthLayout } from "../../store/layout/actions";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

//1 React Datatable start
import DataTable, { defaultThemes } from "react-data-table-component";

import styled from "styled-components";
//1 React Datatable end

//2 React Datatable start
const CustomLoader = () => (
  <div style={{ padding: '24px' }}>
    <Spinner />
    <div>Fancy Loader...</div>
  </div>
);
const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
};
const Spinner = styled.div`
  margin: 16px;
  animation: ___CSS_0___ 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;
const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" color="success" onClick={onClear}>
      X
    </ClearButton>
  </>
);
const CustomTitle = ({ row }) => (
  <div>
    <div>
      <div style={{ color: 'grey', overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}>
        {row.title}
      </div>
    </div>
  </div>
);
//2 React Datatable end


const ToDoList = () => {

  const dispatch = useDispatch();

  //3 React Datatable start
  const [striped, setStriped] = React.useState(true);
  const [highlight, setHighlight] = React.useState(true);
  const [dense, setDense] = React.useState(true);
  const [fixedHeader, setFixedheader] = React.useState(true);
  //3 React Datatable end

  const { toDoReducer, Layout } = useSelector((state) => state);
  

  //4 React Datatable start
  const columns = [
    {
      name: 'First Name',
      selector: 'title',
      maxWidth: '400px',
      sortable: true,
     // cell: row => <CustomTitle row={row} />,
    },
    {
      name: 'Last Name',
      selector: 'body',
      maxWidth: '500px',
      sortable: true,
     // format: row => `${row.body.slice(0, 200)}...`,
    },
    {
      name: "Acton",
      maxWidth: '400px',
      cell: (row) => (
        <div>
          <div>
                
                  <NavLink
                    to={`/todo-single/${row.id}`}
                  >
                    <Button color="success">View</Button>
                  </NavLink>
              
              
                  <NavLink to={`/todo-edit/${row.id}`}>
                    <Button color="secondary">Edit</Button>
                  </NavLink>
              
              
                  <Button
                    color="danger"
                    onClick={() => {
                      if (window.confirm("Are you sure to delete?"))
                        dispatch(removeTodoStart(row.id));
                    }}
                  >
                    Delete
                  </Button>
               
          </div>
        </div>
      ),
      sortable: true,
    },
  ];
  const handlePageChange = page => {
    dispatch(fetchTodosStart(10, page));
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    dispatch(fetchTodosStart(newPerPage, page));
  };
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = toDoReducer.todos.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.body && item.body.toLowerCase().includes(filterText.toLowerCase()))
  );
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  //4 React Datatable end


  useEffect(() => {
    // dispatch(activateAuthLayout());
    dispatch(fetchTodosStart(10, 1));
  }, [dispatch]);

  // if (toDoReducer.fetching) return <p>Loading...</p>;
  // if (toDoReducer.error) {
  //   return <div style={{ color: "red" }}>ERROR: {toDoReducer.error}</div>;
  // }
  // if (toDoReducer.todos.length === 0) return <div>No posts.</div>;

  return (
    <React.Fragment>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
              
                <DataTable
                  title="Users"
                  columns={columns}
                  striped={striped}
                  highlightOnHover={highlight}
                  dense={dense}
                  fixedHeader={fixedHeader}
                  fixedHeaderScrollHeight="400px"
                  data={filteredItems}
                  progressPending={toDoReducer.fetching}
                  pagination
                  paginationResetDefaultPage={resetPaginationToggle}
                  subHeader
                  subHeaderComponent={subHeaderComponentMemo}
                  persistTableHead
                  paginationServer
                  customStyles={customStyles}
                  paginationTotalRows={100}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
                  progressComponent={<CustomLoader />}
                />

              </CardBody>
            </Card>
          </Col>
        </Row>
    </React.Fragment>
  );
};

export default ToDoList;
