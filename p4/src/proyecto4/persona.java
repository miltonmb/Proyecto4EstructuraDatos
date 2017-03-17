/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto4;

import java.io.Serializable;
import java.util.Stack;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

/**
 *
 * @author milton
 */
class persona implements Serializable {

    private static final long serialVersionUID = 7526472295622776147L;
    private String usuario;
    private String password;
    private LinkedList mensajes;
    private LinkedList amigos;
    private ImageIcon profilepic;
    Stack pilaMensajes;

    public persona(String usuario, String password, ImageIcon pp) {
        this.usuario = usuario;
        this.password = password;
        this.profilepic = pp;
        amigos = new LinkedList();
        mensajes = new LinkedList();
        pilaMensajes = new Stack();
    }

    public persona() {
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LinkedList getMensajes() {
        return mensajes;
    }

    public void setMensaje(Object mensaje) {
        pilaMensajes.push(mensaje);
        JOptionPane.showMessageDialog(null, "enviado con exito!");
        /*  if (this.mensajes.Insert(mensaje, 0)) {
            JOptionPane.showMessageDialog(null, "enviado con exito!");
        }*/
    }

    public void mensajeLeido(Object mensaje) {
        this.mensajes.Insert(mensaje, 0);
    }
    
    public LinkedList getAmigos() {
        return amigos;
    }

    public void setAmigo(persona amigo) {
        this.amigos.Insert(amigo, 0);
    }

    public Stack getPila() {
        return pilaMensajes;
    }
    public void setPila(Stack pila){
        this.pilaMensajes = pila;
    }

    @Override
    public String toString() {
        return "persona{" + "usuario=" + usuario + ", password=" + password + '}';
    }

}
