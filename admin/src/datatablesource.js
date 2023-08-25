export const userColumns = [{ field: "id", headerName: "ID", width: 70 },
{
    field: "user", headerName: "USER", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        )
    }
},
{
    field: "email", headerName: "Email", width: 230
},
{
    field: "country", headerName: "Country", width: 100
},
{
    field: "city", headerName: "City", width: 100
},
{
    field: "phone", headerName: "Phone", width: 100
}
]

export const hotelColumns = [
    {
        field: "_id", headerName: "ID", width: 250
    },
    {
        field: "name", headerName: "Name", width: 150
    },
    {
        field: "type", headerName: "Type", width: 100
    },
    {
        field: "title", headerName: "Title", width: 230
    },
    {
        field: "city", headerName: "City", width: 100
    },
]

export const roomColumns = [
    {
        field: "_id", headerName: "ID", width: 70
    },
    {
        field: "title", headerName: "Title", width: 230
    },
    {
        field: "desc", headerName: "Description", width: 200
    },
    {
        field: "price", headerName: "Price", width: 100
    },
    {
        field: "maxPeople", headerName: "Max People", width: 100
    },
]

// export const userRows = [
//     {
//         id: 1,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
//         status: "active",
//         email: "gourav@gmail.com",
//         age: 35
//     },
//     {
//         id: 2,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
//         status: "passive",
//         email: "gourav@gmail.com",
//         age: 19
//     },
//     {
//         id: 3,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU",
//         status: "pending",
//         email: "gourav@gmail.com",
//         age: 19
//     }
// ]