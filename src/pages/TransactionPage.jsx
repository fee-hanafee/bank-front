import React, { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "type", label: "ประเภทธุรกรรม", minWidth: 120 },

  {
    id: "amount",
    label: "จำนวน",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "receiver",
    label: "บัญชีต้นทาง",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sender",
    label: "บัญชีต้นปลายทาง",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "remain",
    label: "ยอดคงเหลือ",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "วันที่",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

import useAuth from "../context/AuthContextProvider";
import * as transaction from "../api/transaction-api";
import formatDate from "../utils/dateFormat";

export default function TransactionPage() {
  const [transac, setTransac] = useState();
  const { user } = useAuth();

  console.log(transac);

  const fetchTransaction = async () => {
    try {
      const response = await transaction.get();
      setTransac(response.data.transaction);
    } catch (err) {
      console.log(first);
    }
  };

  const rows = transac?.map((el) => ({
    type: el.type,
    amount: el.amount,
    receiver: el?.receiverDetails?.bank_account || "",

    sender: el?.senderDetails?.bank_account || "",
    remain: el.remain,
    date: formatDate(el.created_at),
  }));

  //   console.log(rows);

  useEffect(() => {
    if (user) {
      fetchTransaction();
    }
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      className="w-[100vw] h-[calc(100vh-62px)]  py-4 px-8"
      style={{
        background:
          "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
      }}
    >
      {rows && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
}
