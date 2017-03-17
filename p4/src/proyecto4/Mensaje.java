/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto4;

import java.io.Serializable;

/**
 *
 * @author Acer
 */
public class Mensaje implements Serializable {
    String mensaje;
    Object autor;
    String asunto;

    public Mensaje(String mensaje, Object autor, String asunto) {
        this.mensaje = mensaje;
        this.autor = autor;
        this.asunto = asunto;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }
    
    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public Object getAutor() {
        return autor;
    }

    public void setAutor(Object autor) {
        this.autor = autor;
    }
    
    
}
