import React from 'react';
import './styless.css';

export interface ICell {
    columnId: string,
    content: string | number | JSX.Element,
}

export interface IColumn {
    id: string,
    title: string,
}   

export interface IRow {
    cells: ICell[]
}

export interface ITable {
    id: string,
    columns: IColumn[],
    rows: IRow[],
    className?: string,
    gridTemplateColumns?: string,
}

export const Table = (props: ITable) => {
    const {id, columns, rows, className = '', gridTemplateColumns=`repeat(${props.columns.length}, 1fr)`} = props;
    return (
        <table id={id} className={`table ${className}`}>
            <thead>
            <tr style={{gridTemplateColumns: gridTemplateColumns}}>
                {
                    columns.map(({id, title}) => (
                        <th key={id}>{title}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                rows.map(({cells}, index) => (
                    <tr key={`${index}`} style={{gridTemplateColumns: gridTemplateColumns}}>
                        {
                            cells.map(({columnId, content}) => <td key={`${index}-${columnId}`}>{content}</td>)
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}