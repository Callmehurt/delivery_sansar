
$(document).ready(function() {
    $('.basic-datatable').DataTable({
        "lengthMenu": [ [50, 100, 150, -1], [50, 100, 150, "All"] ],
        "pageLength": 50,
    });
} );
