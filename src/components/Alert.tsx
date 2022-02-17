import React from 'react'

function Alert(): JSX.Element {
    return (
        <div className="tickets">
            <div className="alert alert-danger card" role="alert">
                Выберите хотя бы один из вариантов!
            </div>
        </div>
    )
}

export default Alert
