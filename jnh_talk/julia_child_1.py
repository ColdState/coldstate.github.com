# This is based on the zetcode pygtktutorial
import gtk
import math

class PyApp(gtk.Window):
    def __init__(self):
        super(PyApp, self).__init__()

        self.set_title("Julia Child 1")
        self.resize(640, 480);
        self.set_position(gtk.WIN_POS_CENTER)
        self.connect("destroy", gtk.main_quit)
        darea = gtk.DrawingArea()
        darea.connect("expose-event", self.expose)
        self.add(darea)
        self.show_all()

    def expose(self, widget, event):
        cr = widget.window.cairo_create()
        cr.new_path()
        cr.move_to(0, 0)
        cr.line_to(100, 100)
        cr.set_source_rgb(0, 0, 0); # black
        cr.stroke()

PyApp()
gtk.main()



