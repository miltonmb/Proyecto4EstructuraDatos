/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto4;

import java.io.Serializable;

/**
 *
 * @author milton
 */
public class guardar implements Serializable {

    private static final long serialVersionUID = 7526472295622776147L;
    private LinkedList usuarios;

    public guardar() {
        usuarios = new LinkedList();
    }

    public LinkedList getUsuarios() {
        return usuarios;
    }

    public void setUsuario(persona person) {
        this.usuarios.Insert(person, 0);
    }
    public void replace (persona x){
        for (int i = 0; i < usuarios.size; i++) {
            persona temp = (persona) usuarios.get(i);
            if (x.getUsuario().equals(temp.getUsuario())) {
                usuarios.add(x,i);
                break;
            }
        }
    }

}
