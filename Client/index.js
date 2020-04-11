$(document).ready(function() {
    function format ( rowData ) {
        return `<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">
            <tr>
                <td>Start Date</td>
                <td>${rowData.start_date}</td>
            </tr>
            <tr>
                <td>Extension number:</td>
                <td>${rowData.extn}</td>
            </tr>
            <tr>
                <td>Salary:</td>
                <td>${rowData.salary}</td>
            </tr>
        </table>`;
    }

    const renderComponent = () => {
            var table = $('#table-container').DataTable( {
                "ajax": "http://localhost:8080/getEmployeeData",
                "columns": [
                    {
                        "className":      'details-control',
                        "orderable":      false,
                        "data":           null,
                        "defaultContent": ''
                    },
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                ],
            } );
            
             
            // Add event listener for opening and closing details
            $('#table-container tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row( tr );
                if ( row.child.isShown() ) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    row.child( format(row.data()) ).show();
                    tr.addClass('shown');
                }
            } );
     
    }
      renderComponent()
})