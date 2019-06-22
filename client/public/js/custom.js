var travelGroup;
$(function(){
	travelGroup = {
		initAll : function(){
			this.Compenents.initAll();
			this.Helpers.initAll()
		},

		Compenents : {
			initAll : function(){
				this.dataTable()
			},
			dataTable: function() {
				$('#example1').DataTable()
				$('#example2').DataTable({
					'paging'      : true,
					'lengthChange': false,
					'searching'   : false,
					'ordering'    : true,
					'info'        : true,
					'autoWidth'   : false
				})
			}
		},
		Helpers : {
			initAll: function() {
				this.stickyHeader()
			},
			stickyHeader: function() {
				$(window).on('scroll',function() {
					if ($(this).scrollTop() > 100){  
						$('.top-bar').slideUp(300);
						$("header").addClass("header-fixed");
					}
					else{
						$('.top-bar').slideDown(300);
						$("header").removeClass("header-fixed");
					}
				});
			}
		}
	}

	travelGroup.initAll();
})