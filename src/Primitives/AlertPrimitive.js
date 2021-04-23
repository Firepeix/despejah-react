import sweetAlert from 'sweetalert2'

export default class AlertPrimitive {
  /**
   * Função que exibe o SweetAlert2 para o usuario de forma generica
   */
  static alert (type, title, message, time, onClose = null) {
    sweetAlert.fire({
      title: title,
      text: message,
      showConfirmButton: false,
      icon: type,
      confirmButtonText: 'Cool',
      timer: time,
      willClose: onClose !== null ? onClose : function () {}
    });
  }

  /**
   * Função que exibe um alerta de sucesso para o usuário
   */
  static success (message, onClose = null) {
    AlertPrimitive.alert('success', 'Sucesso', message, 1800, onClose);
  }
}
