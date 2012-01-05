# This is based on the zetcode pygtktutorial
import gtk
import math

def one(cr):
    cr.new_path()
    cr.move_to(0, 50)
    # cr.line_to(10, 50)
    # cr.line_to(50, 10)
    # cr.line_to(50, 0)
    cr.curve_to(10, 50, 50, 10, 50, 0);
    cr.line_to(50, 100);
    cr.line_to(100, 100);
    cr.line_to(0, 100);
    cr.set_source_rgb(0, 0, 0); # black
    cr.stroke()

def two(cr):
    cr.new_path()
    cr.move_to(0, 50)
    cr.curve_to(50, 0, 100, 50, 0, 100)
    cr.line_to(100, 100)
    cr.set_source_rgb(0, 0, 0)
    cr.stroke()

map = [['1', '2'],
       ['2', '1']]

class PyApp(gtk.Window):
    def __init__(self):
        super(PyApp, self).__init__()

        self.set_title("Julia Child 3")
        self.resize(640, 480);
        self.set_position(gtk.WIN_POS_CENTER)
        self.connect("destroy", gtk.main_quit)
        darea = gtk.DrawingArea()
        darea.connect("expose-event", self.expose)
        self.add(darea)
        self.show_all()

    def expose(self, widget, event):
        cr = widget.window.cairo_create()
        for row in range(0, 2):
            for col in range(0, 2):
                cr.save()
                cr.translate(row * 100, col * 100)
                if map[row][col] == '1':
                    one(cr)
                elif map[row][col] == '2':
                    two(cr)
                cr.restore()

PyApp()
gtk.main()



