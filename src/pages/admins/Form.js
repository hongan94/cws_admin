
function Form({onSubmit, register, handleSubmit}){
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input name="utf8" type="hidden" value="✓" autoComplete="off" />
        <input type="hidden" name="authenticity_token" value="MUmeKerkU9bba9tH3yBwn1Y7hg41PO9+jLFyG/0Rd1VeCC0N4k8RGToyRfr7ocnsOCLn1hG9Z1uaSiAax5u3YA==" autoComplete="off" />
        <div className="actions" style={{marginBottom: '20px'}}>
          <button type="submit" name="save" className="btn btn-sm btn-success">Lưu</button>&nbsp;
          <button type="submit" name="saveContinue" className="btn btn-sm btn-success">Lưu và tiếp tục</button>&nbsp;
        </div>
        <div className="box-body box">
          <div className="fieldset">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control half" {...register('email')} />
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu</label>
                    <input className="form-control half" type="password" {...register('password')} />
                  </div>
                  <div className="form-group">
                    <label>Xác nhận mật khẩu</label>
                    <input className="form-control half" type="password" {...register('password_confirmation')} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Tên</label>
                    <input className="form-control half" type="text" {...register('fullname')} />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input className="form-control half" type="text"{...register('phone')} />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <input className="form-control half" type="text" {...register('address')} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="control-label">Trạng thái</label>
                    <select className="form-control select2" {...register('status')}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="control-label">Loại</label>
                    <select className="form-control select2" {...register('role')}>
                      <option value="super">Super</option>
                      <option value="normal">Normal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
  )
}

export default Form;