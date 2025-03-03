export function DataGrid(props){
    return(
        <div>
            <table className={`table caption-top table-hover ${props.theme}`}>
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=><th key={field}>{field} <button className="btn bi bi-sort-alpha-down"></button> </th>)
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.records.map(record=>
                            <tr key={record}>
                                {
                                    Object.keys(record).map(key=><td key={key}>{record[key]}</td>)
                                }
                                <td>
                                    <button className="btn btn-warning bi bi-pen-fill"></button>
                                    <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link"> &laquo;</a></li>
                                <li className="page-item"><a className="page-link"> 1</a></li>
                                <li className="page-item"><a className="page-link"> 2</a></li>
                                <li className="page-item"><a className="page-link"> 3</a></li>
                                <li className="page-item"><a className="page-link"> &raquo;</a></li>
                            </ul>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

